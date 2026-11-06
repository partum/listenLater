function Status() {
    return (<div className="status">
        <select name="status" id="status">
            <option value="none">Select Status</option>
            <option value="wantToListen">Want to Listen</option>
            <option value="listening">Listening</option>
            <option value="listened">Listened</option>
        </select>
    </div>)
}
export default Status;