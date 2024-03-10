const { get } = require('./main');


test("支付宝红包", () => {
    const data = `
    [{"mk":231259160230200016,"st":1,"isSc":0,"appId":"","mct":1702972951000,"pl":"{\\"amount\\":1,\\"bizType\\":\\"CROWD_COMMON_CASH\\",\\"count\\":1,\\"couponId\\":\\"202312190206302237474865670087913825\\",\\"flashShow\\":false,\\"gmtClientShow\\":1702972950000,\\"gmtModified\\":1702972950000,\\"iconUrl\\":\\"http:\\/\\/tfs.alipayobjects.com\\/images\\/partner\\/TB1C2W7c.iHDuNkUQcjXXXh_pXa_160X160\\",\\"id\\":\\"2088032022319723_202312190206302237474865670087913825_CROWD_COMMON_CASH_receive\\",\\"linkUrl\\":\\"alipays:\\/\\/platformapi\\/startapp?appId=2021001168603174&startMultApp=YES&appClearTop=false&page=pages%2Fred-packet-result%2Findex%3FcrowdNo%3D202312190206302237474865670087913825%26pageType%3DOTHER_DETAIL&bizType=CROWD_COMMON_CASH&crowdNo=202312190206302237474865670087913825\\",\\"redDot\\":false,\\"resourceType\\":\\"receive\\",\\"sortLevel\\":0,\\"state\\":\\"receiver_received\\",\\"templateCode\\":\\"001\\",\\"templateJson\\":\\"{\\\\\\"statusLine2Color\\\\\\":\\\\\\"#A5A5A5\\\\\\",\\\\\\"subtitle\\\\\\":\\\\\\"来自<font color=\\\\\\\\\\\\\\"#333333\\\\\\\\\\\\\\">从前慢<\\/font>\\\\\\",\\\\\\"statusLine1Color\\\\\\":\\\\\\"#333333\\\\\\",\\\\\\"statusLine2Text\\\\\\":\\\\\\"已领取\\\\\\",\\\\\\"title\\\\\\":\\\\\\"普通红包\\\\\\",\\\\\\"statusLine1Text\\\\\\":\\\\\\"0.01元\\\\\\"}\\",\\"userId\\":\\"2088032022319723\\",\\"visible\\":true}"}]
    `

    let result = get(data);

    expect(result).toEqual({
        type: 1,
        money: 0.01,
        fee: 0,
        shopName: '来自从前慢',
        shopItem: '普通红包',
        accountNameFrom: '',
        accountNameTo: '支付宝余额',
        currency: 'CNY',
        time: 0,
        channel: '支付宝红包'
    });
})

