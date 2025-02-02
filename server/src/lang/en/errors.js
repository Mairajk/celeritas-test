export default {
    default: 'Whoops, looks like something went wrong.',
    notFound: 'The :attribute does not exist.',
    invalidScope: 'You are not allowed to :attribute.',
    account: {
        inactive:
            'Your account is currently inactive. Please reach out to the administrator for assistance.',
        expired:
            'This account has been used before, please contact administrator.',
        invalidCode: ':attribute is invalid or expired.',
        emailExists: 'Email address already exists.',
        invalid: 'You have entered an invalid :attribute! Please try again.',
        confirmPasswordNotMatch:
            'New password and confirm password must be exactly the same.',
        unsubscribed: `You are not subscribed to the platform. If you wish to subscribe, please visit our website or contact support for assistance :link`,
    },
    user: {
        not_exists:
            'Your provided email address is not valid. Please contact the administrator.',
    },
    reset: {
        invalid:
            'Sorry, you have entered an invalid email. Please enter valid email to reset your password.',
        error: 'Whoops. Something went wrong!.',
        expired:
            'Please reset your password again because your link has expired.',
    },
    credentials: {
        invalid: 'You have entered invalid credentials! Please try again.',
    },
    login: {
        loginRequirment: 'Must enter email or phone number.',
    },
    impacts: {
        noInterestAndGoals:
            'Client must have interests and goals to generate impacts.',
    },
    token_expired: 'Token expired.',
    file_token_exceeded:
        'This file ":filename" is exceeding token limit. Please upload a file that has words less than or equal to 1500.',
    file_recently_changed:
        'Verification file has been updated. Please refresh to view the latest version.',
    driver_signature_missing:
        'Can not verify the file as driver signature on the form is missing.',
    reviewer_signature_missing:
        'Can not verify the file as reviewer signature on the form is missing.',
    invalid_access_code:
        'The link you’re using is invalid or no longer available.',
    unauthorized_file_access: 'You do not have permission to access this file.',
}
