import { FaFacebookF, FaGoogle, FaTwitter } from 'react-icons/fa';

function FacebookAuth() {
  return (
    <div>
      <div>
        <h5 className="modal-title">Facebook Authentication</h5>
      </div>
      <div className="modal-body">
        <form>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="text" className="form-control" placeholder="Enter email" />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" placeholder="Enter password" />
          </div>
          <button type="submit" className="btn btn-primary w-100 mb-3">Login</button>
          <div className="d-flex justify-content-center gap-2">
            <button type="button" className="btn btn-outline-danger btn-sm" onClick={() => { window.location.href = "https://localhost:7070/api/Auth/google-login" }}><FaGoogle /></button>
            <button type="button" className="btn btn-outline-danger btn-sm" onClick={() => { window.location.href = "https://localhost:7070/api/Auth/google-login" }}><FaFacebookF /></button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default FacebookAuth
