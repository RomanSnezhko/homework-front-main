type AdressType = {
  street: string;
  city: string;
};

export type UserType = {
  id: number,
  address: AdressType,
  name: string,
  age: number
};

type UserListPropsType = {
  users: UserType[];
};

export const UserList = (props: UserListPropsType) => {
  return (
    <div id={'hw01-users'}>
      <h2>User List:</h2>
      <ul>

        {props.users.map((u) => ( 
          <li key={u.id} id={`hw01-user-${u.id}`}>
            <strong>{u.name}</strong> (Age: {u.age})<strong> Address:</strong>
            {u.address.street}, {u.address.city}
          </li>
      ))}

      </ul>
    </div >
  );
};
