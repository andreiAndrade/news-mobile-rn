/**
 * This is a utils that return a tcomb form input types
 */
import t from 'tcomb-form-native';
const maxAge = 100, minAge = 0;
const Age = t.refinement(t.Number, function (n) {
    return n >= minAge && n <= maxAge;
});
Age.getValidationErrorMessage = () => {
    return 'You must have more than ' + minAge + ' and less than ' + maxAge + ' years old.';
};
const Email = t.refinement(t.String, function (n) {
    const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailPattern.test(n);
});
Email.getValidationErrorMessage = () => {
    return 'Invalid e-mail.';
};
export { Age, Email };
//# sourceMappingURL=MFormInputTypes.js.map