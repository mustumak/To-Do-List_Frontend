import './title.styles.scss';

const Title = ({user}) => {
    return(
        <div id="titleBar">
                <h1>ToDoEase</h1>
                <h3>Welcome,{user} to your personal productivity companion.</h3>
                <h5>Manage your daily tasks, deadlines, and goals securely and efficiently.</h5>
            </div>
    )
}

export default Title;