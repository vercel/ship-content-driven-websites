'use client'

import { track } from '@vercel/analytics'

import { Icons } from './icons'

const deployURL =
  'https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fship-content-driven-websites&project-name=my-content-driven-website&repository-name=my-content-driven-website&demo-title=Ship+Content+Driven+Websites&demo-description=A+content-driven+website+with+built-in+content+editing+and+instant+previews.+Uses+App+Router.&demo-url=https%3A%2F%2Fship-content-driven-websites.vercel.app&demo-image=https%3A%2F%2Fship-content-driven-websites.vercel.app%2Fapi%2Fog&integration-ids=oac_hb2LITYajhRQ0i4QznmKH7gx&external-id=nextjs%3Btemplate%3Dship-content-driven-websites&env=SANITY_REVALIDATE_SECRET&envDescription=A+random+string+value+used+to+validate+revalidation+requests+from+the+Sanity+Webhook.'

export default function DeployButton() {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()

    try {
      track('deploy', {
        projectType: 'content-driven-website',
        source: 'deploy_button',
        location: 'header',
      })
    } catch (error) {
      console.error('Failed to track deploy button click', error)
    }

    // Delay navigation slightly to ensure tracking completes
    setTimeout(() => {
      window.location.href = deployURL
    }, 100)
  }

  return (
    <a href={deployURL} onClick={handleClick} aria-label="Deploy to Vercel">
      <Icons.deploy />
      <span className="sr-only">Deploy to Vercel</span>
    </a>
  )
}
