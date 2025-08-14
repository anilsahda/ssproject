function JWTAuth() {
  return (
    <div>
      <div>
        <h5 className="modal-title">JWT Authentication</h5>
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
        </form>
      </div>
    </div>
  )
}

export default JWTAuth
