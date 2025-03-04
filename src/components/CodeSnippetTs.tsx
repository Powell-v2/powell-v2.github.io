// @ts-expect-error
import { createTransformerFactory, rendererRich } from '@shikijs/twoslash/core'
import React, { useState, useEffect } from 'react'
import { codeToHtml } from 'shiki'
import { createTwoslashFromCDN, TwoslashCdnReturn } from 'twoslash-cdn'
import { createStorage } from 'unstorage'
import indexedDbDriver from 'unstorage/drivers/indexedb'

export function CodeSnippetTs({ code }: { code: string }) {
  const [codeHtml, setCodeHtml] = useState('')
  const [twoSlash, setTwoSlash] = useState<TwoslashCdnReturn | null>(null)
  const [transformerTwoslash, setTransformerTwoslash] = useState<any>()

  useEffect(() => {
    async function run() {
      // if (typeof window === 'undefined') return

      const storage = createStorage({
        driver: indexedDbDriver({ base: 'twoslash-cdn' }),
      })

      const twoslash = createTwoslashFromCDN({
        storage,
        compilerOptions: {
          lib: ['esnext', 'dom'],
        },
      })

      setTwoSlash(twoslash)
      setTransformerTwoslash(createTransformerFactory(twoslash.runSync)({
        renderer: rendererRich(),
      }))
    }

    run()
  }, [])

  useEffect(() => {
    async function run() {
      if (code && twoSlash && transformerTwoslash) {
        const codeTrimmed = code
          .split('\n')
          // Get rid of the first line which is expected to be empty.
          .slice(1)
          .map((line) => (line ? line.trim() : line))
          .join('\n')

        await twoSlash.prepareTypes(codeTrimmed)

        const testHtmlCode = await codeToHtml(codeTrimmed, {
          lang: 'ts',
          themes: {
            light: 'vitesse-light',
            dark: 'vitesse-dark',
          },
          defaultColor: false,
          transformers: [transformerTwoslash],
        })
        setCodeHtml(testHtmlCode)
      }
    }

    run()
  }, [code, twoSlash, transformerTwoslash])

  return (
    <section className="test-html" dangerouslySetInnerHTML={{ __html: codeHtml }} />
  )
}
