module.exports = {
    resetPassword( payload ) {

        const { url } = payload;

        return `
            <p>We heard that you lost your GitHub password. Sorry about that!</p>
            <p>But don’t worry! You can use the following link to reset your password:</p>
            <p><a href='${process.env.BASE_URL}${url}' target="_blank">${process.env.BASE_URL}${url}</a></p>
            <p>Thanks,<br />
            The EcommerStore Team</p>
        `;

    }
}