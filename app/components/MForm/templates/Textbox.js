import React from 'react';
import { View } from 'react-native';
import MFormInput from '../../MFormInput';
const Textbox = (locals) => {
    if (locals.hidden) {
        return null;
    }
    const stylesheet = locals.stylesheet;
    let formGroupStyle = stylesheet.formGroup.normal;
    let textboxViewStyle = stylesheet.textboxView.normal;
    let helpBlockStyle = stylesheet.helpBlock.normal;
    if (locals.hasError) {
        formGroupStyle = stylesheet.formGroup.error;
        textboxViewStyle = stylesheet.textboxView.error;
        helpBlockStyle = stylesheet.helpBlock.error;
    }
    if (locals.editable === false) {
        textboxViewStyle = stylesheet.textboxView.notEditable;
    }
    const textInputProps = {
        accessibilityLabel: locals.label,
        ref: 'input',
        autoCapitalize: locals.autoCapitalize,
        autoCorrect: locals.autoCorrect,
        autoFocus: locals.autoFocus,
        blurOnSubmit: locals.blurOnSubmit,
        editable: locals.editable,
        keyboardType: locals.keyboardType,
        maxLength: locals.maxLength,
        multiline: locals.multiline,
        onBlur: locals.onBlur,
        onEndEditing: locals.onEndEditing,
        onFocus: locals.onFocus,
        onLayout: locals.onLayout,
        onSelectionChange: locals.onSelectionChange,
        onSubmitEditing: locals.onSubmitEditing,
        onContentSizeChange: locals.onContentSizeChange,
        placeholderTextColor: locals.placeholderTextColor,
        secureTextEntry: locals.secureTextEntry,
        selectTextOnFocus: locals.selectTextOnFocus,
        selectionColor: locals.selectionColor,
        numberOfLines: locals.numberOfLines,
        underlineColorAndroid: locals.underlineColorAndroid,
        clearButtonMode: locals.clearButtonMode,
        clearTextOnFocus: locals.clearTextOnFocus,
        enablesReturnKeyAutomatically: locals.enablesReturnKeyAutomatically,
        keyboardAppearance: locals.keyboardAppearance,
        onKeyPress: locals.onKeyPress,
        returnKeyType: locals.returnKeyType,
        selectionState: locals.selectionState,
        onChangeText: (value) => locals.onChange(value),
        onChange: locals.onChangeNative,
        placeholder: locals.placeholder,
        value: locals.value
    };
    return (React.createElement(View, { style: formGroupStyle },
        React.createElement(View, { style: textboxViewStyle },
            React.createElement(MFormInput, Object.assign({}, textInputProps, { hasError: locals.hasError && locals.error, error: locals.error, label: locals.label, help: locals.help, helpBlockStyle: helpBlockStyle })))));
};
export default Textbox;
//# sourceMappingURL=Textbox.js.map