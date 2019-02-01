(function() {
  // DOM utils {{{
  const $  = (selector) => document.querySelector(selector);
  const $$ = (selector) => document.querySelectorAll(selector);
  const on = (elem, type, listener) => elem.addEventListener(type, listener);
  // }}}

  // DOM refs {{{
  const canvas        = $('canvas');
  const mainContainer = $('.main--container');
  const terminal      = $('.terminal');
  const clearBtn      = $('#clear');
  const runBtn        = $('#run');
  const input         = $('input');
  const output        = $('.output');
  const quote_face    = $('.quote_face');
  const quote         = $('.quote');
  const face          = $('.my_face');
  // }}}

  // detect device type {{{
  const isMobile = window.navigator.userAgent.match(/Mobile/) &&
                   window.navigator.userAgent.match(/Mobile/)[0] === "Mobile";
  // }}}

  // terminal's position {x,y} {{{
  let tPositionTop;
  let tPositionLeft;
  // }}}

  // switch for easter egg
  let quoteFaceVisible = false;
  // switches for help blocks - to avoid unnecessary DOM manipulation in case viewport is resized
  let setAsTable;
  let setAsParas;
  // }}}

  // scene related variables {{{
  let ctx;
  let width;
  let height;
  let points;
  let target;
  // }}}

  // Font awesome {{{
  const icons = {
    sun: '<i class="fas fa-sun"></i>',
    gh: '<i class="fab fa-github"></i>',
    so: '<i class="fab fa-stack-overflow"></i>',
    telegram: '<i class="far fa-paper-plane">',
    email: '<i class="far fa-envelope"></i>',
    info: '<i class="fas fa-info-circle"></i>',
    quote: '<i class="fas fa-quote-left fa-2x"></i>',
  }
  // }}}

  const content = {
    about: `
    <p>
      Salute, my name is Pavel. I'm a versatile JavaScript engineer dedicated to
      lifelong learning. Frontend, backend, everything in between - you can count
      on me. I like working solo as much as playing on a team. You can always expect
      me to be transparent about progress on tasks while seeking feedback early
      and often. I enjoy exchanging knowledge with others and believe that trust
      and respect are at the root of all great teamwork.
    </p>

    <p>My personal goals have never changed:</p>

    <ul class="fa-ul">
        <li><span class="fa-li">${icons.sun}</span>Do exceptional work</li>
        <li><span class="fa-li">${icons.sun}</span>Have fun</li>
        <li><span class="fa-li">${icons.sun}</span>Experiment</li>
        <li><span class="fa-li">${icons.sun}</span>Treat people right</li>
        <li><span class="fa-li">${icons.sun}</span>Tell the truth</li>
        <li><span class="fa-li">${icons.sun}</span>Have a positive impact on the world around me</li>
        <li><span class="fa-li">${icons.sun}</span>Give back</li>
        <li><span class="fa-li">${icons.sun}</span>Keep learning</li>
    </ul>`,

    blog: `<p>Latest posts:</p>
           <ul class="fa-ul">
             <li><span class="fa-li">${icons.sun}</span><a class="blogpost" href="assets/posts/better_backup.html">A Better Backup Plan</a></li>
             <li><span class="fa-li">${icons.sun}</span><a class="blogpost" href="assets/posts/deep.html">Deep Work</a></li>
             <li><span class="fa-li">${icons.sun}</span><a class="blogpost" href="assets/posts/site_redesign.html">How I Redesigned My Website</a></li>
             <li><span class="fa-li">${icons.sun}</span><a class="blogpost" href="assets/posts/first_os_contrib.html">First Open Source Contrib</a></li>
             <li><span class="fa-li">${icons.sun}</span><a class="blogpost" href="assets/posts/inception.html">Inception</a></li>
           </ul>`,

    cmdNotRecognized: `<p>Sorry, but your command wasn't recognized. To see the full list of\
                          available commands, type <span class="bold">'powell -h'</span>\
                          into the command line and hit <span class='italic'>Run</span>.</p>`,

    contact: `<p>Get in touch:</p>
              <ul class="fa-ul">
                <li><span class="fa-li">${icons.gh}</span><a href="https://github.com/Powell-v2" target="_blank">Github</a></li>
                <li><span class="fa-li">${icons.so}</span><a href="http://stackoverflow.com/story/powell-v2" target="_blank">StackOverflow</a></li>
                <li><span class="fa-li">${icons.telegram}</i></span><a href="https://t.me/keepiteasy" target="_blank">Telegram</a></li>
                <li><span class="fa-li">${icons.email}</span><a href="mailto:ermolinpv@gmail.com">Email</a></li>
              </ul>`,

    empty: `<p>Terminal expects a command to be entered. To see the full list of\
            available commands, type <span class="bold">'powell -h'</span> into\
            the command line and hit <span class='italic'>Run</span>.</p>`,

    helpTable: `<p><strong>Usage:</strong> powell [options]</p>
                <p><strong>Example:</strong> powell -a</p>
                <p><strong>Options:</strong></p>
                <table>
                  <tr>
                    <td>-a or --about</td>
                    <td>Self-intro.</td>
                  </tr>
                  <tr>
                    <td>-s or --skills</td>
                    <td>My professional skills.</td>
                  </tr>
                  <tr>
                    <td>-c or --contact</td>
                    <td>Find out how to contact me.</td>
                  </tr>
                  <tr>
                    <td>-b or --blog</td>
                    <td>Shows most recent blog posts.</td>
                  </tr>
                  <tr>
                    <td>-h or --help</td>
                    <td>Displays list of all available commands.</td>
                  </tr>
                  <tr>
                    <td>-v or --version</td>
                    <td>Displays powell's version.</td>
                  </tr>
                  <tr>
                    <td>-e or --emerge</td>
                    <td>No description.</td>
                  </tr>
                </table>`,

     helpParas: `<p><strong>Usage:</strong> powell [options]</p>
                 <p><strong>Example:</strong> powell -a</p>
                 <p><strong>Options:</strong></p>
                 <p><span class='italic'>-a or --about</span></p>
                 <p class="help--options__desc">Self-intro.</p>
                 <p><span class='italic'>-s or --skills</span></p>
                 <p class="help--options__desc">My professional skills.</p>
                 <p><span class='italic'>-c or --contact</span></p>
                 <p class="help--options__desc">Find out how to contact me.</p>
                 <p><span class='italic'>-b or --blog</span></p>
                 <p class="help--options__desc">Shows most recent blog posts.</p>
                 <p><span class='italic'>-h or --help</span></p>
                 <p class="help--options__desc">Lists all available commands.</p>
                 <p><span class='italic'>-v or --version</span></p>
                 <p class="help--options__desc">Displays powell's version.</p>
                 <p><span class='italic'>-e or --emerge</span></p>
                 <p class="help--options__desc">No description.</p>`,

    skills: `<p>As the saying goes:</p>
             <div class="saying">
               <div>
                 ${icons.quote}
               </div>
               <div>
                 <p>A jack of all trades is a master of none ... but oftentimes better than a master of one.</p>
               </div>
             </div>
             <p>Among other things, I can:</p>
             <ul class="fa-ul">
               <li>
                 <span class="fa-li">${icons.sun}</span>
                 Swifly put together a working prototype of a feature/application
               </li>
               <li>
                 <span class="fa-li">${icons.sun}</span>
                 Learn a framework/library when it becomes necessary and adapt to new
                 concepts as they are being introduced
               </li>
               <li>
                 <span class="fa-li">${icons.sun}</span>
                 Write clean, maintainable, thoroughly documented and well tested code
               </li>
               <li>
                 <span class="fa-li">${icons.sun}</span>
                 Get shit done while having fun along the way!
               </li>
             </ul>
             <p>
               I'm empathetic towards customers and this naturally extends into my desire to
               deliver high-quality UX. New technologies rouse my curiosity and excite me -
               at least moderately :] I have tool-agnostic mentality when it comes to
               choosing the most appropriate instrument(s) for the job which allows to
               detach and clearly evaluate benefits and tradeoffs for the team as well
               as for the project and its users. Above all else, being pragmatic enables
               me to identify high-yielding areas to focus on and set clear priorities.
             </p>`,

    tooltip: `<p>${icons.info} <span class="bold">'powell -h'</span> command reveals the list of all available actions.</p>`,

    version: '<p>Version 2.3.0</p>',
  };

  /**
   * Constructs circles.
   * @param {Object} pos  - Position coordinates.
   * @param {integer} rad - Circle's radius.
   */
  class Circle {
    constructor(pos, rad) {
      this.pos    = pos || null;
      this.radius = rad || null;
    }

    draw() {
      if (!this.active) return;
      ctx.beginPath();
      ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI);
      ctx.fillStyle = 'rgba(255, 112, 3, ' + this.active + ')';
      ctx.fill();
    };
  }

  // kickstart {{{
  initMain();
  initAnimation();
  initListeners();
  // }}}

  /**
   * Takes care of initial setup - getting refs, creating and detecting adjacent
   * points, drawing dots.
   */
  function initMain() {
    width  = window.innerWidth;
    height = window.innerHeight;
    target = {
      x: width / 2,
      y: height / 2,
    };

    // initial centering and resizing of the terminal
    resizeAndRecenterTerminal();

    mainContainer.style.height = height + 'px';
    mainContainer.style.width  = width + 'px';

    canvas.width  = width;
    canvas.height = height;

    ctx = canvas.getContext('2d');

    // create points {{{
    points = [];
    for (let x = 0; x < width; x += width / 15) {
      for (let y = 0; y < height; y += height / 15) {
        let px = x + Math.random() * width / 15;
        let py = y + Math.random() * height / 15;
        let p = {
          x: px,
          originX: px,
          y: py,
          originY: py,
        };
        points.push(p);
      }
    }
    // }}}

    // for each point, find 5 closest points {{{
    for (let i = 0; i < points.length; i++) {
      let closest = [];
      let p1 = points[i];
      for (let j = 0; j < points.length; j++) {
        let p2 = points[j];
        if (!(p1 === p2)) {
          let placed = false;
          for (let k = 0; k < 5; k++) {
            if (!placed) {
              if (closest[k] == undefined) {
                closest[k] = p2;
                placed = true;
              }
            }
          }
          for (let a = 0; a < 5; a++) {
            if (!placed) {
              if (getDistance(p1, p2) < getDistance(p1, closest[a])) {
                closest[a] = p2;
                placed = true;
              }
            }
          }
        }
      }
      p1.closest = closest;
    }
    // }}}

    // generate a circle and assign it to a point {{{
    for (let p in points) {
      let c = new Circle(points[p], 2 + Math.random());
      points[p].circle = c;
    }
    // }}}
  }

  /**
   * Sets coordinates for the target.
   * @param {Object} e - Mouse event.
   */
  function mouseMove(e) {
    target.x = e.pageX;
    target.y = e.pageY;
  }

  /**
   * Updates placeholder value depending on the available space inside input field.
   * @param {integer} winWidth - Viewport's width.
   */
  function tailorInputPlaceholder(winWidth) {
    if (winWidth < 375 || (winWidth > 420 && winWidth < 490)) {
      input.placeholder = 'Type a command here';
    } else if ((winWidth >= 375 && winWidth <= 420) || (winWidth >= 490 && winWidth < 580)) {
      input.placeholder = 'Type a command here and hit \'Run\'';
    } else if (winWidth >= 580) {
      input.placeholder = 'Type a command here and hit \'Run\' to execute it';
    }
  }

  /**
   * For narrow mobile devices, displays help's options section as paragraps with
   * separators, and for larger devices displays it as a table.
   */
  function tailorHelpBlocks() {
    const helpBlocks = $$('.help');
    if (window.innerWidth < 645 && !setAsParas) {
      if ($$('.help').length !== 0) {
        for (let i = 0; i < helpBlocks.length; i++) {
          helpBlocks[i].innerHTML = content.helpParas;
          for (let j = 0; j < helpBlocks[i].childNodes.length; j++) {
            if ((helpBlocks[i].childNodes[j].nodeType === document.ELEMENT_NODE) &&
                (helpBlocks[i].childNodes[j].className === 'help--options__desc')) {
              const separator = document.createElement('div');
              separator.className = 'separator';
              helpBlocks[i].childNodes[j].append(separator);
            }
          }
        }
        setAsParas = true;
        setAsTable = false;
      }
    }
    else if (window.innerWidth >= 645 && !setAsTable) {
      for (let i = 0; i < helpBlocks.length; i++) {
        helpBlocks[i].innerHTML = content.helpTable;
        setAsTable = true;
        setAsParas = false;
      }
    }
  }

  /**
   * Takes care of terminal's positioning on the screen, computing appropriate
   * dimensions for it along the way.
   */
  function resizeAndRecenterTerminal() {
    tailorInputPlaceholder(window.innerWidth);
    tailorHelpBlocks();

    if (quote_face.style.display === 'block') {
      terminal.style.height = window.innerHeight / 1.5 + 'px';
      terminal.style.width = window.innerWidth / 1.2 + 'px';

      tPositionTop  = (window.innerHeight - terminal.offsetHeight + face.offsetHeight) / 2;
      tPositionLeft = (window.innerWidth - terminal.offsetWidth) / 2;

      terminal.style.top  = tPositionTop + 'px';
      terminal.style.left = tPositionLeft + 'px';

      let fPositionTop = (tPositionTop - face.offsetHeight) / 2;

      face.style.left = tPositionLeft + 'px';
      face.style.top  = fPositionTop + 'px';

      quote.style.left        = tPositionLeft + face.offsetWidth + 'px';
      quote.style.top         = fPositionTop + face.offsetHeight / 5 + 'px';
      quote.style.marginRight = tPositionLeft + 'px';
    } else {
      terminal.style.height = window.innerHeight / 1.5 + 'px';
      terminal.style.width  = window.innerWidth / 1.2 + 'px';

      tPositionTop  = (window.innerHeight - terminal.offsetHeight) / 2;
      tPositionLeft = (window.innerWidth - terminal.offsetWidth) / 2;

      terminal.style.top  = tPositionTop + 'px';
      terminal.style.left = tPositionLeft + 'px';
    }
  }

  /**
   * Resizes container, canvas and terminal based on viewport's dimensions.
   */
  function resize() {
    width  = window.innerWidth;
    height = window.innerHeight;

    mainContainer.style.height = height + 'px';
    mainContainer.style.width  = width + 'px';

    canvas.width  = width;
    canvas.height = height;

    resizeAndRecenterTerminal();
  }

  /**
   * Fetches post's content.
   * @param {Object} e - Mouse event.
   */
  function fetchPost(e) {
    e.preventDefault();
    const postURL = e.target.href;
    fetch(postURL)
      .then((res) => res.text())
      .then((text) => appendToOutputStream(`${text}`, 'blogpost--fetched'));
  }

  /**
   * Attaches onclick event listeners to every blog post link.
   */
  function transformLinksToFetchPosts() {
    const blogposts = Array.from($$('.blogpost'));
    blogposts.forEach((a) => {
      on(a, 'click', fetchPost);
    })
  }

  /**
   * Makes sure the result of executing commands is displayed in the terminal.
   * @param {string} html                - Content wrapped in HTML tags.
   * @param {string|undefined} className - Optional CSS class.
   */
  function appendToOutputStream(html, className) {
    const article = document.createElement('article');

    let classN = 'output--block';

    if (className) {
      classN += ' ' + className;
    }
    article.className = classN;
    article.innerHTML = html;
    output.appendChild(article);
    if (className === 'help') {
      tailorHelpBlocks();
    }
    if (className === 'blogposts') {
      transformLinksToFetchPosts();
    }
    if (className === 'blogpost--fetched') {
      // scroll to the bottom
      output.scrollTop = output.scrollHeight;
    }
  }

  function flyFaceIn() {
    quote_face.style.display = 'block';
    quoteFaceVisible = true;

    tPositionTop = (window.innerHeight - terminal.offsetHeight + face.offsetHeight) / 2;

    let qPositionLeft = tPositionLeft + face.offsetWidth;
    let fPositionTop  = (tPositionTop - face.offsetHeight) / 2;
    let qPositionTop  = fPositionTop + face.offsetHeight / 5;

    let quoteText = 'Heyyo, I\'m Pavel, creator of this website. Good job discovering this easter egg!';

    if (window.innerWidth < 550) {
      quote.innerText = quoteText;
    } else {
      quote.innerText = quoteText + ' I\'ll just hang out here for a while =)';
    }

    quote.style.marginRight = tPositionLeft + 'px';

    TweenLite.to(terminal, 2.5, {top: tPositionTop, ease: Back.easeInOut.config(4)});
    TweenLite.to(face, 2.5, {left: tPositionLeft, top: fPositionTop, ease: Back.easeInOut.config(1)});
    TweenLite.to(quote, 2.5, {left: qPositionLeft, top: qPositionTop, ease: Back.easeInOut.config(1)});
  }

  // function replaceQuote() {
  //   const randIndex = Math.floor(Math.random() * quotes.length);
  //   quote.innerText = quotes[randIndex];
  // }

  /**
   * Adds ripple effect to the button when pressed.
   * @param {Object} e - Mouse event.
   */
  function sendRipple(e) {
    const btn      = e.target;
    const rect     = btn.getBoundingClientRect();
    const btnWidth = rect.width;
    const ripple   = document.createElement('span');

    let mousePosX = 0;
    let mousePosY = 0;

    if (isMobile) {
    	mousePosX = e.changedTouches[0].pageX - rect.left;
    	mousePosY = e.changedTouches[0].pageY - rect.top;
    } else {
      mousePosX = e.x - rect.left;
      mousePosY = e.y - rect.top;
    }

    const initialCSS = `position: absolute;
                        top:${mousePosY - btnWidth}px;
                        left:${mousePosX - btnWidth}px;
                        width: ${btnWidth * 2}px;
                        height: ${btnWidth * 2}px;
                        border-radius: 50%;
                        background: rgba(240, 240, 240, 0.6);
                        transition: all linear .45s;
                        transition-timing-function: ease-in;
                        pointer-events: none;
                        transform:scale(0)`;

    ripple.style.cssText = initialCSS;

    // prevent circle from spreading across button's borders
    btn.style.overflow = 'hidden';
    btn.appendChild(ripple);

    // add props necessary to kick off animation {{{
    setTimeout(() => {
      ripple.style.cssText += 'transform:scale(1); opacity: 0;';
    }, 1);
    // }}}

    // self-destruct {{{
    setTimeout(() => {
      ripple.remove();
    }, 450);
    // }}}
  }

  /**
   * Intercepts submit event and processes the input.
   * @param {Object} e - Mouse event.
   */
  function handleSubmit(e) {
    e.preventDefault();
    const command = input.value.toLowerCase().split(' ')[1];

    // empty string submitted {{{
    if (input.value.length === 0) {
      appendToOutputStream(content.empty);
    }
    // }}}
    else if (command === '--help' || command === '-h') {
      if (window.innerWidth < 570) {
        appendToOutputStream(content.helpParas, 'help');
        setAsParas = true;
      } else {
        appendToOutputStream(content.helpTable, 'help');
        setAsTable = true;
      }
    }
    else if (command === '--version' || command === '-v') {
      appendToOutputStream(content.version);
    }
    else if (command === '--blog' || command === '-b') {
      appendToOutputStream(content.blog, 'blogposts');
    }
    else if (command === '--contact' || command === '-c') {
      appendToOutputStream(content.contact);
    }
    else if (command === '--about' || command === '-a') {
      appendToOutputStream(content.about);
    }
    else if (command === '--skills' || command === '-s') {
      appendToOutputStream(content.skills);
    }
    else if (command === '--emerge' || command === '-e') {
      if (!quoteFaceVisible) flyFaceIn();
    }
    else {
      appendToOutputStream(content.cmdNotRecognized);
    }

    // Always scroll to the bottom of the terminal to show the result of the output {{{
    if (output.scrollHeight > output.offsetHeight) {
      output.scrollTop = output.scrollHeight;
    }
    // }}}
  }

  /**
   * Wires up event listeners.
   */
  function initListeners() {
    // enable interaction with bg only on laptop/destop {{{
    if (!('ontouchstart' in window)) {
      on(window, 'mousemove', mouseMove);
    }
    // }}}
    // wire up touch events for mobile devices {{{
    if ('ontouchstart' in window) {
      on(clearBtn, 'touchstart', () => output.innerHTML = '');
    }
    // }}}

    on(clearBtn, 'click', (e) => {
      sendRipple(e);
      output.innerHTML = '';
    });
    on(runBtn, 'click', (e) => sendRipple(e));

    on(window, 'resize', resize);
    on(window, 'submit', handleSubmit);
    on(window, 'load', () => {
      appendToOutputStream(content.tooltip, 'tooltip');
    })
  }

  /**
   * Kicks off animation, effectively shifting position of points along the way.
   */
  function initAnimation() {
    animate();
    for (let p in points) {
      shiftPoint(points[p]);
    }
  }

  /**
   * Takes care of animating the scene. This includes drawing elements and choosing
   * opacity for elements depending on the position of the pointer.
   */
  function animate() {
    ctx.clearRect(0, 0 , width, height);
    for (let p in points) {
      // set opacity for elements which are closest to the cursor {{{
      if (Math.abs(getDistance(target, points[p])) < 5000) {
        points[p].active = 0.3;
        points[p].circle.active = 0.6;
      }
      // }}}
      // set opacity for elements around cursor {{{
      else if (Math.abs(getDistance(target, points[p])) < 25000) {
        points[p].active = 0.15;
        points[p].circle.active = 0.30;
      }
      // }}}
      // set opacity for elements further away from cursor {{{
      else if (Math.abs(getDistance(target, points[p])) < 250000) {
        points[p].active = 0.05;
        points[p].circle.active = 0.15;
      }
      // }}}
      // hide other elements from view {{{
      else {
        points[p].active = 0;
        points[p].circle.active = 0;
      }
      // }}}

      drawLines(points[p]);
      points[p].circle.draw();
    }
    requestAnimationFrame(animate);
  }

  /**
   * Shifts the dots with specified easing.
   * @param {Object} p - Point.
   */
  function shiftPoint(p) {
    TweenLite.to(p, 1 + Math.random(), {
      x: p.originX - 50 + Math.random() * 100,
      y: p.originY - 50 + Math.random() * 100,
      ease: SlowMo.ease.config(0.05, 0.05, false),
      onComplete: function() {
        shiftPoint(p);
      }
    });
  }

  /**
   * Connects the dots.
   * @param {Object} p - Point.
   */
  function drawLines(p) {
    if (!p.active) return;
    for (let i in p.closest) {
      ctx.beginPath();
      ctx.moveTo(p.x, p.y);
      ctx.lineTo(p.closest[i].x, p.closest[i].y);
      ctx.strokeStyle = 'rgba(204, 146, 23, ' + p.active + ')';
      ctx.stroke();
    }
  }
  // }}}

  /**
   * Calculates distance between 2 points (without extracting the root).
   * @param  {[type]} p1 - First point.
   * @param  {[type]} p2 - Second point.
   * @return {integer} Distance between 2 points.
   */
  function getDistance(p1, p2) {
    return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
  }
})();
