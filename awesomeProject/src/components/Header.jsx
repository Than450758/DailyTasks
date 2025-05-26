import React from 'react'

function Header({count}) {
  return (
    <div>
        Header
        <h1 class="text-3xl font-bold underline">
            Hello world! { count }
        </h1>

    </div>
  )
}

export default Header
