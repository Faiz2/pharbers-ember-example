import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        sendXhr(year, month) {
            console.info(year)
            console.info(month)
            console.info("我发送请求啦！")
        }
    }
});
