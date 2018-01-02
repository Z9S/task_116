let sinon = require("sinon");
let main = require("../lib/main");

describe('main()', () => {

    it('should display main menu once started', () => {
        sinon.spy(console, 'log');
        main();
        expect(console.log.args.join()).toBe("1. 添加学生\n2. 生成成绩单\n3. 退出\n请输入你的选择（1～3）：");
    });
});
