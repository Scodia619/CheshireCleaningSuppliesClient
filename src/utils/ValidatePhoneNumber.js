export const handlePhoneChange = (e, setPhone, setError) => {
    const inputValue = e.target.value;
    const ukPhoneRegex = /^(?:\+44|0)(?:7\d{9}|1\d{8,9})$/;

    setPhone(inputValue);

    if (!ukPhoneRegex.test(inputValue)) {
        setError("Invalid UK phone number. Please check the format.");
    } else {
        setError("");
    }
}