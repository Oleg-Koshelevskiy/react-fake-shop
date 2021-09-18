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

const Title = (props) => {
    console.log(props)
    return <h1>Hello {props.name}</h1>
}

const App = () => {
    return (
        <>
            <Title name="Jack" />
            <Text />
            <Title name="Oleg" />
            <Title name="Test" />
            <Title name="React.js" />
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
