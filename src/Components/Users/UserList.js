import Card from "../UI/Card";
import css from "./UserList.module.css"

const UserList = (props) => {
    return (
        <Card className={css.users}>
            <ul>
                {props.users.map((user) => (
                    <li key={user.key}>
                        {user.name} ({user.age} years old) {user.college}
                    </li>
                ))}
            </ul>
        </Card>
    );
};

export default UserList;