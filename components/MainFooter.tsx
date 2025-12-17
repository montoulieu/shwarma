import React from 'react'

const MainFooter = () => {
  return (
    <footer className="flex flex-col items-center text-brand pb-5">
      <a
        href="mailto:shwarmaband@gmail.com"
        className="mx-auto mb-6 border border-brand text-brand hover:opacity-50 p-2 rounded-lg"
      >
        Contact
      </a>
      <small>shwarma (2017 - {new Date().getFullYear()})</small>
    </footer>
  )
}

export default MainFooter
