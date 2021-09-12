import React from 'react'
import ReactDOM from 'react-dom'

const Text = () => {
    return (
        <>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Pariatur ab assumenda earum explicabo. Earum beatae magni aut
                aspernatur assumenda asperiores iure rerum porro unde molestiae
                quis, in corrupti pariatur error?
            </p>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Pariatur ab assumenda earum explicabo. Earum beatae magni aut
                aspernatur assumenda asperiores iure rerum porro unde molestiae
                quis, in corrupti pariatur error?
            </p>
        </>
    )
}

const Title = () => {
    return <h1>Hello React component</h1>
}

const App = () => {
    return (
        <>
            <Title />
            <Text />
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
