import { Button } from "react-bootstrap";
import "./Users.scss";
import Table from "react-bootstrap/Table";
import { getAllUsers } from "../../service/userService";
import { useEffect, useState } from "react";
import Pagination from "react-bootstrap/Pagination";

const Users = () => {
  const [listUsers, setListUsers] = useState([]);

  const fetchAllUsers = async () => {
    let res = await getAllUsers();
    if (res && res.EC === 0) setListUsers(res.DT);
  };

  useEffect(() => {
    fetchAllUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="users-container">
      <div className="header mb-3">
        <Button variant="success">Refresh</Button>
        <Button variant="primary" className="mx-2">
          Add New
        </Button>
      </div>

      <div className="body">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>No</th>
              <th>Email</th>
              <th>Username</th>
              <th>Group</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {listUsers &&
              listUsers.length > 0 &&
              listUsers.map((user, index) => {
                return (
                  <tr key={user.id}>
                    <td>{index + 1}</td>
                    <td>{user.email}</td>
                    <td>{user.username}</td>
                    <td>{user.Group ? user.Group.name : ""}</td>
                    <td>
                      <Button variant="danger">Delete</Button>
                      <Button variant="warning" className="mx-2">
                        Edit
                      </Button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </div>

      <div className="user-footer">
        <Pagination>
          <Pagination.Item>Previous</Pagination.Item>
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Ellipsis />

          <Pagination.Item>{10}</Pagination.Item>
          <Pagination.Item>{11}</Pagination.Item>
          <Pagination.Item active>{12}</Pagination.Item>
          <Pagination.Item>{13}</Pagination.Item>
          <Pagination.Item disabled>{14}</Pagination.Item>

          <Pagination.Ellipsis />
          <Pagination.Item>{20}</Pagination.Item>
          <Pagination.Item>Next</Pagination.Item>
        </Pagination>
      </div>
    </div>
  );
};

export default Users;
