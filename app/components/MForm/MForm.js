import React from 'react';
import t from 'tcomb-form-native';
import { Textbox } from './templates';
const Form = t.form.Form;
const templates = Object.assign({}, Form.templates, { textbox: Textbox });
class MForm extends React.Component {
    constructor(props) {
        super(props);
        this.getValue = () => {
            return this._refForm.getValue();
        };
    }
    render() {
        return (React.createElement(Form, Object.assign({ ref: form => this._refForm = form }, this.props, { templates: templates })));
    }
}
export default MForm;
//# sourceMappingURL=MForm.js.map