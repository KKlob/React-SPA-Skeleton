import React from 'react';

function Form() {
    return (
        <div className="Form">
            <p>This is a Form page</p>
            <form>
                <label for="FirstName">First Name:</label>
                <input name="FirstName" />
                <button>Submit!</button>
            </form>
        </div>
    )
}

export default Form;