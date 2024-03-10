const { get } = require('./main');


test("支付宝转账收款", () => {
    const data = `
    [
     {
        "mk": 231053230251200014,
        "st": 1,
        "isSc": 0,
        "appId": "",
        "mct": 1697209372000,
        "pl": "{\\"templateType\\":\\"BN\\",\\"commandType\\":\\"UPDATE\\",\\"withPushNfc\\":\\"Y\\",\\"expireLink\\":\\"\\",\\"msgType\\":\\"TODO\\",\\"icon\\":\\"https:\\/\\/gw.alipayobjects.com\\/mdn\\/rms_f96971\\/afts\\/img\\/A*leNcS41oUu0AAAAAAAAAAABkARQnAQ\\",\\"link\\":\\"alipays:\\/\\/platformapi\\/startapp?appId=20000003&actionType=toBillDetails&tradeNO=20231013200040011100670089706568&bizType=D_TRANSFER?tagid=MB_SEND_PH\\",\\"businessId\\":\\"PAY_HELPER_CARD_2088032022319723\\",\\"msgId\\":\\"ee195465b09e7082af3214ec2bab83bd00972\\",\\"templateCode\\":\\"00059_00094_zfzs001\\",\\"templateId\\":\\"WALLET-BILL@BLPaymentHelper\\",\\"title\\":\\"收到一笔转账\\",\\"content\\":\\"{\\\\\\"status\\\\\\":\\\\\\"收到一笔转账\\\\\\",\\\\\\"date\\\\\\":\\\\\\"10月13日\\\\\\",\\\\\\"amountTip\\\\\\":\\\\\\"\\\\\\",\\\\\\"money\\\\\\":\\\\\\"0.01\\\\\\",\\\\\\"unit\\\\\\":\\\\\\"元\\\\\\",\\\\\\"infoTip\\\\\\":\\\\\\"\\\\\\",\\\\\\"failTip\\\\\\":\\\\\\"\\\\\\",\\\\\\"goto\\\\\\":\\\\\\"alipays:\\/\\/platformapi\\/startapp?appId=20000003&actionType=toBillDetails&tradeNO=20231013200040011100670089706568&bizType=D_TRANSFER\\\\\\",\\\\\\"content\\\\\\":[{\\\\\\"title\\\\\\":\\\\\\"付款人：\\\\\\",\\\\\\"content\\\\\\":\\\\\\"从前慢 185******30\\\\\\"}],\\\\\\"ad\\\\\\":[],\\\\\\"actions\\\\\\":[{\\\\\\"name\\\\\\":\\\\\\"\\\\\\",\\\\\\"url\\\\\\":\\\\\\"\\\\\\"},{\\\\\\"name\\\\\\":\\\\\\"查看详情\\\\\\",\\\\\\"url\\\\\\":\\\\\\"alipays:\\/\\/platformapi\\/startapp?appId=20000003&actionType=toBillDetails&tradeNO=20231013200040011100670089706568&bizType=D_TRANSFER\\\\\\"}]}\\",\\"linkName\\":\\"\\",\\"bizName\\":\\"支付助手\\",\\"msgCategory\\":\\"bill\\",\\"scm\\":\\"27.gotone.card.ee195465b09e7082af3214ec2bab83bd00972.MB_SEND_PH.null.payment_assist.10090.10099.2019062521000502094325.9991746\\",\\"assistInfo\\":\\"{\\\\\\"showInFriendTab\\\\\\":false,\\\\\\"icon\\\\\\":\\\\\\"https:\\/\\/gw.alipayobjects.com\\/mdn\\/rms_f96971\\/afts\\/img\\/A*ZapXT6AjvG0AAAAAAAAAAABkARQnAQ\\\\\\",\\\\\\"reminderType\\\\\\":\\\\\\"point\\\\\\",\\\\\\"hiddenMsgHeader\\\\\\":false,\\\\\\"title\\\\\\":\\\\\\"支付助手\\\\\\",\\\\\\"reminderTypeModifyEnable\\\\\\":false,\\\\\\"assistId\\\\\\":\\\\\\"payment_assist\\\\\\",\\\\\\"desc\\\\\\":\\\\\\"支付宝资金变动通知\\\\\\"}\\",\\"ih\\":\\"{\\\\\\"extInfo\\\\\\":{},\\\\\\"iid\\\\\\":\\\\\\"105\\\\\\",\\\\\\"ioty\\\\\\":\\\\\\"aor\\\\\\",\\\\\\"itemBasicInfo\\\\\\":{\\\\\\"dn\\\\\\":\\\\\\"服务提醒\\\\\\",\\\\\\"ic\\\\\\":\\\\\\"https:\\/\\/gw.alipayobjects.com\\/zos\\/bmw-prod\\/b96c31e0-64ba-4cbb-9a64-73ff17d701fd.webp\\\\\\",\\\\\\"lk\\\\\\":\\\\\\"alipays:\\/\\/platformapi\\/startapp?appId=20000235&source=friendTab\\\\\\"},\\\\\\"itemUserRelation\\\\\\":{\\\\\\"ilf\\\\\\":\\\\\\"N\\\\\\",\\\\\\"uc\\\\\\":{\\\\\\"top\\\\\\":\\\\\\"0\\\\\\"},\\\\\\"version\\\\\\":0},\\\\\\"ity\\\\\\":\\\\\\"105\\\\\\",\\\\\\"moty\\\\\\":\\\\\\"u\\\\\\",\\\\\\"msgInfo\\\\\\":{\\\\\\"bm\\\\\\":\\\\\\"收到一笔转账￥0.01 \\\\\\",\\\\\\"cmid\\\\\\":\\\\\\"ee195465b09e7082af3214ec2bab83bd00972\\\\\\",\\\\\\"lmt\\\\\\":1697209371912,\\\\\\"msrid\\\\\\":\\\\\\"00059_00094_zfzs001\\\\\\",\\\\\\"ncs\\\\\\":\\\\\\"N\\\\\\",\\\\\\"rps\\\\\\":\\\\\\"num\\\\\\",\\\\\\"sam\\\\\\":\\\\\\"Y\\\\\\",\\\\\\"ssrid\\\\\\":\\\\\\"PAY_HELPER_CARD_2088032022319723\\\\\\",\\\\\\"urn\\\\\\":1}}\\",\\"bizMonitor\\":\\"{\\\\\\"serviceCode\\\\\\":\\\\\\"MB_SEND_PH\\\\\\",\\\\\\"bizName\\\\\\":\\\\\\"\\\\\\",\\\\\\"createTime\\\\\\":1697209371973,\\\\\\"businessId\\\\\\":\\\\\\"PAY_HELPER_CARD_2088032022319723\\\\\\",\\\\\\"messageId\\\\\\":\\\\\\"ee195465b09e7082af3214ec2bab83bd00972\\\\\\",\\\\\\"messageTitle\\\\\\":\\\\\\"收到一笔转账\\\\\\",\\\\\\"pid\\\\\\":\\\\\\"2088622103925679\\\\\\",\\\\\\"templateId\\\\\\":\\\\\\"WALLET-BILL@BLPaymentHelper\\\\\\",\\\\\\"status\\\\\\":\\\\\\"\\\\\\"}\\",\\"languageType\\":\\"zh-Hans\\",\\"subscribeConfig\\":\\"0\\",\\"gmtCreate\\":1697209371912,\\"gmtValid\\":1699801371907,\\"operate\\":\\"SEND\\",\\"templateName\\":\\"支付助手\\",\\"homePageTitle\\":\\"收到一笔转账￥0.01 \\",\\"status\\":\\"\\",\\"extraInfo\\":\\"{\\\\\\"topSubContent\\\\\\":\\\\\\"收到一笔转账\\\\\\",\\\\\\"preValue\\\\\\":\\\\\\"￥\\\\\\",\\\\\\"languageType\\\\\\":\\\\\\"zh-Hans\\\\\\",\\\\\\"isPaymentMsg\\\\\\":true,\\\\\\"assistName2\\\\\\":\\\\\\"\\\\\\",\\\\\\"assistName3\\\\\\":\\\\\\"\\\\\\",\\\\\\"assistName1\\\\\\":\\\\\\"付款人\\\\\\",\\\\\\"templateId\\\\\\":\\\\\\"WALLET-FWC@remindNumber\\\\\\",\\\\\\"content\\\\\\":\\\\\\"0.01\\\\\\",\\\\\\"linkName\\\\\\":\\\\\\"\\\\\\",\\\\\\"assistMsg3\\\\\\":\\\\\\"\\\\\\",\\\\\\"sceneExt2\\\\\\":{\\\\\\"sceneUrl\\\\\\":\\\\\\"alipays:\\/\\/platformapi\\/startapp?appId=20000003&actionType=toBillDetails&tradeNO=20231013200040011100670089706568&bizType=D_TRANSFER\\\\\\",\\\\\\"sceneType\\\\\\":\\\\\\"nativeApp\\\\\\",\\\\\\"sceneName\\\\\\":\\\\\\"转账\\\\\\",\\\\\\"sceneIcon\\\\\\":\\\\\\"https:\\/\\/gw.alicdn.com\\/tfs\\/TB19XIWiIieb18jSZFvXXaI3FXa-100-100.png\\\\\\"},\\\\\\"assistMsg2\\\\\\":\\\\\\"\\\\\\",\\\\\\"assistMsg1\\\\\\":\\\\\\"从前慢 185******30\\\\\\",\\\\\\"assistName4\\\\\\":\\\\\\"\\\\\\",\\\\\\"assistMsg5\\\\\\":\\\\\\"\\\\\\",\\\\\\"assistMsg4\\\\\\":\\\\\\"\\\\\\",\\\\\\"assistName5\\\\\\":\\\\\\"\\\\\\",\\\\\\"buttonLink\\\\\\":\\\\\\"\\\\\\",\\\\\\"cardAdInfo\\\\\\":{\\\\\\"p116\\\\\\":{\\\\\\"bizMonitor\\\\\\":{\\\\\\"marketingUniqueId\\\\\\":\\\\\\"MUb59f576f4d944f8e8b5b77f447def2eb\\\\\\",\\\\\\"outBizId\\\\\\":\\\\\\"LIFE_MSG_TEXT|AMTT202301041527374135|-\\\\\\",\\\\\\"marketingRuleId\\\\\\":\\\\\\"MR41b88eb9d64442b09a87a890d6848fc3\\\\\\",\\\\\\"style\\\\\\":\\\\\\"actionLine\\\\\\",\\\\\\"marketingItemId\\\\\\":\\\\\\"MI501400035beb4580a6f92e161f06d081\\\\\\"},\\\\\\"expireTime\\\\\\":1728745371972,\\\\\\"marketingUniqueId\\\\\\":\\\\\\"MUb59f576f4d944f8e8b5b77f447def2eb\\\\\\",\\\\\\"minClientVersion\\\\\\":\\\\\\"10.1.98\\\\\\",\\\\\\"recommendTemplateId\\\\\\":\\\\\\"actionLine\\\\\\",\\\\\\"viewInfo\\\\\\":{\\\\\\"btnName\\\\\\":\\\\\\"支付奖励\\\\\\",\\\\\\"actionType\\\\\\":\\\\\\"link\\\\\\",\\\\\\"tagIcon\\\\\\":\\\\\\"https:\\/\\/mdn.alipayobjects.com\\/huamei_cke3ep\\/afts\\/img\\/A*s1xhTYe-_PQAAAAAAAAAAAAADk1-AQ\\/original\\\\\\",\\\\\\"tagColor\\\\\\":\\\\\\"#FF6011\\\\\\",\\\\\\"actionUrl\\\\\\":\\\\\\"alipays:\\/\\/platformapi\\/startapp?appId=68687805&url=https://render.alipay.com/p/yuyan/180020380000000023/home-page.html?source=LIFE_MSG_TEXT__AMTT202301041527374135&chInfo=LIFE_MSG_TEXT\\\\\\",\\\\\\"tag\\\\\\":\\\\\\"领积分，兑各类生活好物\\\\\\"}}}}\\"}"
}]`

    let result = get(data);

    expect(result).toEqual({
        type: 1,
        money: 0.01,
        fee: 0,
        shopName: '从前慢 185******30',
        shopItem: '收到一笔转账',
        accountNameFrom: '',
        accountNameTo: '支付宝余额',
        currency: 'CNY',
        time: 0,
        channel: '支付宝转账收款'
    });
})

test("支付宝收款码收款", () => {
    const data = `
    [
     {"mk":231260152230200009,"st":1,"isSc":0,"appId":"","mct":1703056950000,"pl":"{\\"templateType\\":\\"S\\",\\"commandType\\":\\"SEND\\",\\"expireLink\\":\\"https:\\/\\/render.alipay.com\\/p\\/f\\/fd-jblxfp45\\/pages\\/home\\/index.html\\",\\"withPushNfc\\":\\"N\\",\\"msgType\\":\\"NOTICE\\",\\"appInfo\\":\\"{\\\\\\"appName\\\\\\":\\\\\\"支付宝商家服务\\\\\\",\\\\\\"appId\\\\\\":\\\\\\"2021002117633826\\\\\\",\\\\\\"linkUrl\\\\\\":\\\\\\"alipays:\\/\\/platformapi\\/startApp?appId=2021002117633826\\\\\\",\\\\\\"msgListConfig\\\\\\":\\\\\\"0\\\\\\",\\\\\\"logoUrl\\\\\\":\\\\\\"https:\\/\\/appstoreisvpic.alipayobjects.com\\/prod\\/9332f60a-5e22-4504-9601-a4d434945b1f.png\\\\\\"}\\",\\"icon\\":\\"https:\\/\\/appstoreisvpic.alipayobjects.com\\/prod\\/9332f60a-5e22-4504-9601-a4d434945b1f.png\\",\\"link\\":\\"alipays:\\/\\/platformapi\\/startapp?appId=60000081\\",\\"msgId\\":\\"ff175689e251456149b7942b76c4c62100972\\",\\"templateCode\\":\\"pep_MDailyBill_top_Push\\",\\"templateId\\":\\"WALLET-FWC@remindDefaultText\\",\\"title\\":\\"支付宝商家服务\\",\\"content\\":\\"收款金额￥0.01\\",\\"linkName\\":\\"查看该笔收款详情\\",\\"bizName\\":\\"支付宝商家服务\\",\\"appId\\":\\"2021002117633826\\",\\"msgCategory\\":\\"bill\\",\\"assistInfo\\":\\"{\\\\\\"assistId\\\\\\":\\\\\\"merchant_aissit\\\\\\",\\\\\\"desc\\\\\\":\\\\\\"支付宝收款变动通知\\\\\\",\\\\\\"hiddenMsgHeader\\\\\\":false,\\\\\\"icon\\\\\\":\\\\\\"https:\\/\\/gw.alipayobjects.com\\/mdn\\/rms_f96971\\/afts\\/img\\/A*z-kdS4Z_SJYAAAAAAAAAAABkARQnAQ\\\\\\",\\\\\\"reminderType\\\\\\":\\\\\\"point\\\\\\",\\\\\\"reminderTypeModifyEnable\\\\\\":false,\\\\\\"showInFriendTab\\\\\\":false,\\\\\\"title\\\\\\":\\\\\\"收款助手\\\\\\"}\\",\\"subscribeMsg\\":false,\\"ih\\":\\"{\\\\\\"extInfo\\\\\\":{},\\\\\\"iid\\\\\\":\\\\\\"105\\\\\\",\\\\\\"ioty\\\\\\":\\\\\\"aor\\\\\\",\\\\\\"itemBasicInfo\\\\\\":{\\\\\\"dn\\\\\\":\\\\\\"服务提醒\\\\\\",\\\\\\"ic\\\\\\":\\\\\\"https:\\/\\/gw.alipayobjects.com\\/zos\\/bmw-prod\\/b96c31e0-64ba-4cbb-9a64-73ff17d701fd.webp\\\\\\",\\\\\\"lk\\\\\\":\\\\\\"alipays:\\/\\/platformapi\\/startapp?appId=20000235&source=friendTab\\\\\\"},\\\\\\"itemUserRelation\\\\\\":{\\\\\\"ilf\\\\\\":\\\\\\"N\\\\\\",\\\\\\"uc\\\\\\":{\\\\\\"top\\\\\\":\\\\\\"0\\\\\\",\\\\\\"ic\\\\\\":\\\\\\"0\\\\\\"},\\\\\\"version\\\\\\":0},\\\\\\"ity\\\\\\":\\\\\\"105\\\\\\",\\\\\\"moty\\\\\\":\\\\\\"a\\\\\\",\\\\\\"msgInfo\\\\\\":{\\\\\\"bm\\\\\\":\\\\\\"￥0.01收款到账通知，领积分兑好礼\\\\\\",\\\\\\"cmid\\\\\\":\\\\\\"ff175689e251456149b7942b76c4c62100972\\\\\\",\\\\\\"lmt\\\\\\":1703056950113,\\\\\\"msrid\\\\\\":\\\\\\"pep_MDailyBill_top_Push\\\\\\",\\\\\\"ncs\\\\\\":\\\\\\"N\\\\\\",\\\\\\"rps\\\\\\":\\\\\\"num\\\\\\",\\\\\\"sam\\\\\\":\\\\\\"Y\\\\\\",\\\\\\"sn\\\\\\":\\\\\\"支付宝商家服务\\\\\\",\\\\\\"urn\\\\\\":1}}\\",\\"bizMonitor\\":\\"{\\\\\\"isFollow\\\\\\":false,\\\\\\"serviceCode\\\\\\":\\\\\\"pep_MDailyBill_top_Push\\\\\\",\\\\\\"bizName\\\\\\":\\\\\\"支付宝商家服务\\\\\\",\\\\\\"createTime\\\\\\":1703056950296,\\\\\\"targetDataId\\\\\\":\\\\\\"MG6dc818a39d284d4b84e3d142d7b4945d_5\\\\\\",\\\\\\"appId\\\\\\":\\\\\\"2021002117633826\\\\\\",\\\\\\"messageId\\\\\\":\\\\\\"ff175689e251456149b7942b76c4c62100972\\\\\\",\\\\\\"messageTitle\\\\\\":\\\\\\"支付宝商家服务\\\\\\",\\\\\\"templateId\\\\\\":\\\\\\"WALLET-FWC@remindDefaultText\\\\\\"}\\",\\"subscribeConfig\\":\\"1\\",\\"gmtCreate\\":1703056950113,\\"gmtValid\\":2018676150113,\\"operate\\":\\"SEND\\",\\"templateName\\":\\"商家服务收款到账\\",\\"homePageTitle\\":\\"￥0.01收款到账通知，领积分兑好礼\\",\\"attributes\\":\\"0000000000000001\\",\\"extraInfo\\":\\"{\\\\\\"hiddenSumFlag\\\\\\":\\\\\\"N\\\\\\",\\\\\\"expireLink\\\\\\":\\\\\\"https:\\/\\/render.alipay.com\\/p\\/f\\/fd-jblxfp45\\/pages\\/home\\/index.html\\\\\\",\\\\\\"icon\\\\\\":\\\\\\"https:\\/\\/appstoreisvpic.alipayobjects.com\\/prod\\/9332f60a-5e22-4504-9601-a4d434945b1f.png\\\\\\",\\\\\\"link\\\\\\":\\\\\\"alipays:\\/\\/platformapi\\/startapp?appId=60000081\\\\\\",\\\\\\"assistName2\\\\\\":\\\\\\"经营信息\\\\\\",\\\\\\"assistName3\\\\\\":\\\\\\"备注\\\\\\",\\\\\\"assistName1\\\\\\":\\\\\\"经营数据\\\\\\",\\\\\\"subscribeConfig\\\\\\":\\\\\\"1\\\\\\",\\\\\\"title\\\\\\":\\\\\\"支付宝商家服务\\\\\\",\\\\\\"templateId\\\\\\":\\\\\\"WALLET-FWC@remindDefaultText\\\\\\",\\\\\\"content\\\\\\":\\\\\\"收款金额￥0.01\\\\\\",\\\\\\"linkName\\\\\\":\\\\\\"查看该笔收款详情\\\\\\",\\\\\\"assistMsg3\\\\\\":\\\\\\"用收钱码收钱，安全有保障\\\\\\",\\\\\\"assistMsg2\\\\\\":\\\\\\"老顾客消费\\\\\\",\\\\\\"assistMsg1\\\\\\":\\\\\\"今日第4笔收入，共计¥0.04\\\\\\",\\\\\\"gmtValid\\\\\\":2018676150113,\\\\\\"sceneExt\\\\\\":{\\\\\\"sceneTemplateId\\\\\\":\\\\\\"WALLET-FWC@remindDefaultText\\\\\\",\\\\\\"sceneUrl\\\\\\":\\\\\\"alipays:\\/\\/platformapi\\/startApp?appId=2021002117633826\\\\\\",\\\\\\"sceneType\\\\\\":\\\\\\"miniApp\\\\\\",\\\\\\"sceneName\\\\\\":\\\\\\"支付宝商家服务\\\\\\",\\\\\\"sceneId\\\\\\":\\\\\\"2021002117633826\\\\\\",\\\\\\"sceneIcon\\\\\\":\\\\\\"https:\\/\\/appstoreisvpic.alipayobjects.com\\/prod\\/9332f60a-5e22-4504-9601-a4d434945b1f.png\\\\\\",\\\\\\"sceneExtInfo\\\\\\":\\\\\\"\\\\\\",\\\\\\"sceneTitle\\\\\\":\\\\\\"进入小程序\\\\\\"},\\\\\\"homePageTitle\\\\\\":\\\\\\"￥0.01收款到账通知\\\\\\",\\\\\\"buttonLink\\\\\\":\\\\\\"alipays:\\/\\/platformapi\\/startapp?appId=2019101468394439&page=pages%2Fpayment-detail%2Findex%3FrecvPayDirection%3DRECEIVE%26rpRecordId%3D20231220300000016225671240107397%26gmtRecvPay%3D2023-12-20%2015%3A22%3A29\\\\\\",\\\\\\"cardAdInfo\\\\\\":{\\\\\\"p10\\\\\\":{\\\\\\"bizMonitor\\\\\\":{\\\\\\"marketingUniqueId\\\\\\":\\\\\\"MU3f64557eec244412ac000d0a54fbb8dc\\\\\\",\\\\\\"outBizId\\\\\\":\\\\\\"-@-@AMG|5|d9cae2938b92445e2823b2bb783ba4eef|6Z2W0e8j6Ysh5ysD02\\\\\\",\\\\\\"marketingRuleId\\\\\\":\\\\\\"MR25d206aaf84841e4bbb3234442826914\\\\\\",\\\\\\"style\\\\\\":\\\\\\"recommendAssistLine\\\\\\",\\\\\\"marketingItemId\\\\\\":\\\\\\"MIc2e3c19ad65e48fd8a88d8e64b471da4\\\\\\"},\\\\\\"clientPositionId\\\\\\":\\\\\\"p10\\\\\\",\\\\\\"expireTime\\\\\\":1734592950293,\\\\\\"marketingUniqueId\\\\\\":\\\\\\"MU3f64557eec244412ac000d0a54fbb8dc\\\\\\",\\\\\\"minClientVersion\\\\\\":\\\\\\"10.1.98\\\\\\",\\\\\\"recommendTemplateId\\\\\\":\\\\\\"recommendAssistLine\\\\\\",\\\\\\"viewInfo\\\\\\":{\\\\\\"assistMsg\\\\\\":\\\\\\"收钱可免费兑2包纸巾\\\\\\",\\\\\\"btnBorderColor\\\\\\":\\\\\\"#FFAF87\\\\\\",\\\\\\"actionType\\\\\\":\\\\\\"link\\\\\\",\\\\\\"homePageContent\\\\\\":\\\\\\"领积分兑好礼\\\\\\",\\\\\\"btnText\\\\\\":\\\\\\"去看看\\\\\\",\\\\\\"btnTextColor\\\\\\":\\\\\\"#FF6010\\\\\\",\\\\\\"assistMsgColor\\\\\\":\\\\\\"#FF6010\\\\\\",\\\\\\"actionUrl\\\\\\":\\\\\\"alipays:\\/\\/platformapi\\/startapp?appId=2021002117633826&sourceEventId=UT2023101602856590_1.730025a9e5e39&chinfo=ch_ SJFUSY__chsub_jhhtcard\\\\\\",\\\\\\"assistName\\\\\\":\\\\\\"本次奖励\\\\\\"}}}}\\"}"}
     ]`

    let result = get(data);

    expect(result).toEqual({
        type: 1,
        money: 0.01,
        fee: 0,
        shopName: '支付宝商家服务',
        shopItem: '老顾客消费',
        accountNameFrom: '',
        accountNameTo: '支付宝余额',
        currency: 'CNY',
        time: 0,
        channel: '支付宝收款码收款'
    });
})