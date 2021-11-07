const AuthHoc = (props) => {
    const {
        children,
        isAuthenticated,
    } = props;

    if (!isAuthenticated) {
        return null;
    }

    return new Error('error');
}

export default AuthHoc;
