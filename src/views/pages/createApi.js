import React from "react"
import '../../../src/style.css'

class createApi extends React.Component {
    render() {
        return <>
            <h4>Create API Key</h4>
            <div>
            <input type="text" name="Generate new key" placeholder="Generate new key..." />
            </div>
            <></>
            <div>
            <input type="text" name="confirm passphrase " placeholder="confirm passphrase ..." />
            </div>
            <div>
            <input type="submit" value="save" />
            </div>
        </>
    }
}

export default createApi