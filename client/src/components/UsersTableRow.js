const UsersTableRow = props => {
  // props
  const { user, updateUser, deleteUser } = props;
  // handlers
  const handleClick = e => {
    // uso prompt para resolver rapido (mejorar esto)
    const firstName = prompt('Nombre?') || user.firstName;
    const lastName = prompt('Apellido?') || user.lastName;
    const role = prompt('Rol?') || user.role;
    // update user
    updateUser(user._id, { firstName, lastName, role })
  };
  // render
  return (
    <tr>
      <td>{user._id}</td>
      <td>{user.username}</td>
      <td>{user.firstName}</td>
      <td>{user.lastName}</td>
      <td>{user.role}</td>
      <td>
        <button onClick={handleClick}>Editar</button>
      </td>
      <td>
        <button onClick={() => deleteUser(user._id)}>Borrar</button>
      </td>
    </tr>
  );
};

export default UsersTableRow;
