import { Button } from "react-bootstrap";
import "./Users.scss";
import Table from "react-bootstrap/Table";
import { getUsersPaginate, deleteUser } from "../../service/userService";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { toast } from "react-toastify";

const Users = () => {
  const LIMIT = 2;
  const [listUsers, setListUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);

  // const fetchAllUsers = async () => {
  //   let res = await getAllUsers();
  //   if (res && res.EC === 0) setListUsers(res.DT);
  // };

  const fetchUsersPaginate = async () => {
    let res = await getUsersPaginate(currentPage, LIMIT);
    if (res && res.EC === 0) {
      setListUsers(res.DT.users);
      setPageCount(res.DT.totalPages);
    }
  };

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    setCurrentPage(event.selected + 1);
  };

  const handleDelete = async (id) => {
    let res = await deleteUser(id);
    if (res && res.EC === 0) {
      toast.success(res.EM);
      setCurrentPage(1);
    }
  };

  useEffect(() => {
    fetchUsersPaginate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  // useEffect(() => {
  //   fetchAllUsers();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

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
                    <td>{index + 1 + (currentPage - 1) * LIMIT}</td>
                    <td>{user.email}</td>
                    <td>{user.username}</td>
                    <td>{user.Group ? user.Group.name : ""}</td>
                    <td>
                      <Button
                        variant="danger"
                        onClick={() => handleDelete(user.id)}
                      >
                        Delete
                      </Button>
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

      <div className="user-footer mt-5">
        <ReactPaginate
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={3}
          pageCount={pageCount}
          previousLabel="< previous"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
          renderOnZeroPageCount={null}
          forcePage={pageCount !== 0 ? currentPage - 1 : -1} //if there is user data to be fetch, display current page as active
        />
      </div>
    </div>
  );
};

export default Users;
