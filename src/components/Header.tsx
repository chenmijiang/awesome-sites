import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import styled from 'styled-components'

import github from '@/lib/images/github.svg'

const Header = () => {
  const router = useRouter()
  const pathname = router.pathname
  return (
    <HeaderContainer>
      <div className="right absolute right-20px top-0 flex">
        <nav>
          <svg
            className="w-2em h-3em block"
            viewBox="0 0 2 3">
            <path
              d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z"
              fill=""
            />
          </svg>
          <ul>
            <li aria-current={pathname === '/' ? 'page' : undefined}>
              <Link href="/">主页</Link>
            </li>
            <li aria-current={pathname === '/' ? 'page' : undefined}>
              <Link href="/about">关于</Link>
            </li>
          </ul>
          <svg
            className="w-2em h-3em block"
            viewBox="0 0 2 3"
            aria-hidden="true">
            <path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
          </svg>
        </nav>

        <div className="corner w-[3em] h-[3em]">
          <a
            className="w-full h-full flex justify-center items-center"
            href="https://github.com/cunzaizhuyi/awesome-fe-sites"
            target="_blank">
            <Image
              className="w-[2em] h-[2em] object-contain"
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
  nav {
    display: flex;
    justify-content: center;
    --background: rgba(255, 255, 255, 0.7);
    path {
      fill: var(--background);
    }
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
