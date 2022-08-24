function fakeResponse<T>(fakeJson: T, sleepTime = 1000): (url: string) => Promise<T> {
    return (url: string) => Promise
        .resolve(fakeJson)
        .then(async (resJson) => {
            await new Promise(resolve => setTimeout(resolve, sleepTime));

            return resJson;
        });
}

export default fakeResponse;
