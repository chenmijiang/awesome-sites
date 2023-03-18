import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from 'styled-components'

import github from '@/lib/images/github.svg'

const Header = () => {
  const router = useRouter()
  const pathname = router.pathname
  return (
    <HeaderContainer className="pt-10px">
      {/* site-title */}
      <section className="relative">
        <div className="text-center">
          <div className="mb-10px text-30px">
            <div className="i-mdi-forest text-green"></div>
            <span className="px-5px relative top-2px">前端森林</span>
            <div className="i-mdi-forest text-green"></div>
          </div>
          <div className="slogan">前端酷站 尽收眼底</div>
        </div>
      </section>

      <div className="right absolute right-20px top-0 flex">
        <nav>
          <svg
            viewBox="0 0 2 3"
            aria-hidden="true">
            <path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
          </svg>
          <ul>
            <li className={pathname === '/' ? 'page' : undefined}>
              <Link href="/">主页</Link>
            </li>
            <li className={pathname === '/' ? 'page' : undefined}>
              <a href="/about">关于</a>
            </li>
          </ul>
          <svg
            viewBox="0 0 2 3"
            aria-hidden="true">
            <path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
          </svg>
        </nav>

        <div className="corner">
          <a
            href="https://github.com/cunzaizhuyi/awesome-fe-sites"
            target="_blank">
            <img
              src={github}
              alt="GitHub"
            />
          </a>
        </div>
      </div>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
  .corner {
    width: 3em;
    height: 3em;
  }

  .corner a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .corner img {
    width: 2em;
    height: 2em;
    object-fit: contain;
  }

  nav {
    display: flex;
    justify-content: center;
    --background: rgba(255, 255, 255, 0.7);
  }

  svg {
    width: 2em;
    height: 3em;
    display: block;
  }

  path {
    fill: var(--background);
  }

  ul {
    position: relative;
    padding: 0;
    margin: 0;
    height: 3em;
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    background: var(--background);
    background-size: contain;
  }

  li {
    position: relative;
    height: 100%;
  }

  li[aria-current='page']::before {
    --size: 6px;
    content: '';
    width: 0;
    height: 0;
    position: absolute;
    top: 0;
    left: calc(50% - var(--size));
    border: var(--size) solid transparent;
    border-top: var(--size) solid var(--color-theme-1);
  }

  nav a {
    display: flex;
    height: 100%;
    align-items: center;
    padding: 0 0.5rem;
    color: var(--color-text);
    font-weight: 700;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    text-decoration: none;
    transition: color 0.2s linear;
  }

  a:hover {
    color: var(--color-theme-1);
  }
`

export default Header
