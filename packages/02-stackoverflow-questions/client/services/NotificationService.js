export default {
    async getNotifications() {
        console.warn("Notification Service");

        await new Promise(resolve => setTimeout(resolve, 1000));

        return { count: 42 }
    }
}
