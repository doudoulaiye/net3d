let datas=new Object();
datas.entities = [
	{	
		id:'e1',
		type:'人',
		name:'张三',
		sex:'男',
		relations:['r1','r2'],
		events:['ev1','ev2'],
		position:'122.151098 30.020866',
		is_prevent:'是'
	},
	{	
		id:'e2',
		type:'人',
		name:'李四',
		sex:'女',
		relations:['r1','r3'],
		events:['ev1','ev3'],
		position:'122.176395 30.001852',
		is_prevent:'否'
	},
	{	
		id:'e3',
		type:'人',
		name:'王五',
		sex:'男',
		relations:['r2','r3'],
		events:['ev2','ev3'],
		position:'122.158572 30.044879',
		is_prevent:'否'
	}
	,
	{	
		id:'e4',
		type:'车',
		name:'浙A11111',
		sex:'男',
		relations:['r2','r3'],
		events:['ev2','ev3'],
		position:'122.158572 30.044879',
		is_prevent:'否'
	}
	,
	{	
		id:'e5',
		type:'人',
		name:'王e5',
		sex:'男',
		relations:['r2','r3'],
		events:['ev2','ev3'],
		position:'122.158572 30.044879',
		is_prevent:'否'
	}
	,
	{	
		id:'e6',
		type:'人',
		name:'王e6',
		sex:'男',
		relations:['r2','r3'],
		events:['ev2','ev3'],
		position:'122.158572 30.044879',
		is_prevent:'否'
	}
	,
	{	
		id:'e7',
		type:'人',
		name:'王e7',
		sex:'男',
		relations:['r2','r3'],
		events:['ev2','ev3'],
		position:'122.158572 30.044879',
		is_prevent:'否'
	},
	{	
		id:'e8',
		type:'人',
		name:'王e8',
		sex:'男',
		relations:['r2','r3'],
		events:['ev2','ev3'],
		position:'122.158572 30.044879',
		is_prevent:'否'
	},
	{	
		id:'e9',
		type:'人',
		name:'王e9',
		sex:'男',
		relations:['r2','r3'],
		events:['ev2','ev3'],
		position:'122.158572 30.044879',
		is_prevent:'否'
	},
	{	
		id:'e10',
		type:'人',
		name:'王e10',
		sex:'男',
		relations:['r2','r3'],
		events:['ev2','ev3'],
		position:'122.158572 30.044879',
		is_prevent:'否'
	},
	{	
		id:'e11',
		type:'人',
		name:'王e11',
		sex:'男',
		relations:['r2','r3'],
		events:['ev2','ev3'],
		position:'122.158572 30.044879',
		is_prevent:'否'
	}
];
datas.events = [
	{
		id:'ev1',
		typestr:'事件',
		name:'快递',
		date:'20171008',
		entities:['e1','e2'],
		relations:['r1','r2'],
		position:'122.070898 30.02662'
	},
	{
		id:'ev2',
		typestr:'事件',
		name:'入住',
		date:'20170908',
		entities:['e1','e3'],
		relations:['r1','r3'],
		position:'122.148224 30.006856'
	},
	{
		id:'ev3',
		typestr:'事件',
		name:'卡口过车',
		date:'20170608',
		entities:['e3','e2'],
		relations:['r3','r2'],
		position:'122.176107 30.025369'
	},
	{
		id:'ev4',
		typestr:'事件',
		name:'卡口过车',
		date:'20170308',
		entities:['e3','e2'],
		relations:['r3','r2'],
		position:'122.368345 29.937776'
	},
	{
		id:'ev5',
		type:'事件',
		name:'抓拍',
		date:'20160608',
		entities:['e3','e2'],
		relations:['r3','r2'],
		position:'122.075066 30.127566'
	},
	{
		id:'ev6',
		type:'事件',
		name:'案件',
		date:'20160508',
		entities:['e3','e2'],
		relations:['r3','r2'],
		position:'122.291809 30.066948'
	},
	{
		id:'ev7',
		type:'事件',
		name:'快递',
		date:'20160408',
		entities:['e3','e2'],
		relations:['r3','r2'],
		position:'122.330472 29.976389'
	},
	{
		id:'ev8',
		type:'事件',
		name:'入住',
		date:'20160308',
		entities:['e3','e2'],
		relations:['r3','r2'],
		position:'122.309488 29.961371'
	},
	{
		id:'ev9',
		type:'事件',
		name:'入住',
		date:'20160208',
		entities:['e3','e2'],
		relations:['r3','r2'],
		position:'122.132198 29.99666'
	},
	{
		id:'ev10',
		type:'事件',
		name:'进餐',
		date:'20160208',
		entities:['e3','e2'],
		relations:['r3','r2'],
		position:'122.147433 30.006543'
	},
	{
		id:'ev11',
		type:'事件',
		name:'卡口过车',
		date:'20160108',
		entities:['e3','e2'],
		relations:['r3','r2'],
		position:'122.127383 30.007794'
	},
	{
		id:'ev12',
		type:'事件',
		name:'卡口过车',
		date:'20151208',
		entities:['e3','e2'],
		relations:['r3','r2'],
		position:'122.110782 30.032748'
	},
	{
		id:'ev13',
		type:'事件',
		name:'卡口过车',
		date:'20151108',
		entities:['e3','e2'],
		relations:['r3','r2'],
		position:'122.122137 30.025056'
	},
	{
		id:'ev14',
		type:'事件',
		name:'卡口过车',
		date:'20151008',
		entities:['e3','e2'],
		relations:['r3','r2'],
		position:'122.113513 30.025306'
	},
	{
		id:'ev15',
		type:'事件',
		name:'卡口过车',
		date:'20150908',
		entities:['e3','e2'],
		relations:['r3','r2'],
		position:'122.091882 30.01974'
	},
	
	{
		id:'ev16',
		type:'事件',
		name:'卡口过车',
		date:'20150808',
		entities:['e3','e2'],
		relations:['r3','r2'],
		position:'122.105105 30.031185'
	},
	{
		id:'ev17',
		type:'事件',
		name:'卡口过车',
		date:'20150708',
		entities:['e3','e2'],
		relations:['r3','r2'],
		position:'122.176107 30.025369'
	},
	{
		id:'ev18',
		type:'事件',
		name:'卡口过车',
		date:'20150608',
		entities:['e3','e2'],
		relations:['r3','r2'],
		position:'122.10029 30.024056'
	},
	
	{
		id:'ev19',
		type:'事件',
		name:'卡口过车',
		date:'20150508',
		entities:['e3','e2'],
		relations:['r3','r2'],
		position:'122.101799 30.021054'
	}
	
	,
	{
		id:'ev20',
		type:'事件',
		name:'卡口过车',
		date:'20150408',
		entities:['e3','e2'],
		relations:['r3','r2'],
		position:'122.110279 30.01874'
	},
	{
		id:'ev21',
		type:'事件',
		name:'卡口过车',
		date:'20150308',
		entities:['e3','e2'],
		relations:['r3','r2'],
		position:'122.116028 30.01849'
	}
	
	,
	{
		id:'ev22',
		type:'事件',
		name:'卡口过车',
		date:'20150208',
		entities:['e3','e2'],
		relations:['r3','r2'],
		position:'122.091882 30.026244'
	},
	{
		id:'ev23',
		type:'事件',
		name:'卡口过车',
		date:'20150108',
		entities:['e3','e2'],
		relations:['r3','r2'],
		position:'122.127527 30.016363'
	}
	
];


datas.relations = [

	{
		id:'r1',
		type:'关系',
		name:'同住',
		entities:['e1','e2'],
		datef:'20160101',
		datet:'20171230'//当前时间
	},
	
	{
		id:'r2',
		type:'关系',
		name:'亲属',
		entities:['e1','e3'],
		datef:'19900100',
		datet:'20171230'//当前时间
	},
	{
		id:'r3',
		type:'关系',
		name:'同行',
		entities:['e3','e2'],
		datef:'20170101',
		datet:'20170701'
	}
	,
	{
		id:'r4',
		type:'关系',
		name:'同行',
		entities:['e1','e4'],
		datef:'20150101',
		datet:'20150401'
	}
	,
	{
		id:'r5',
		type:'关系',
		name:'同行',
		entities:['e1','e5'],
		datef:'20150401',
		datet:'20150701'
	}
	,
	{
		id:'r6',
		type:'关系',
		name:'同行',
		entities:['e2','e6'],
		datef:'20150401',
		datet:'20150701'
	},
	{
		id:'r7',
		type:'关系',
		name:'同行',
		entities:['e2','e7'],
		datef:'20150401',
		datet:'20150701'
	}
	,
	{
		id:'r8',
		type:'关系',
		name:'同行',
		entities:['e1','e8'],
		datef:'20150701',
		datet:'20151101'
	}
	,
	{
		id:'r9',
		type:'关系',
		name:'同行',
		entities:['e1','e9'],
		datef:'20160101',
		datet:'20161201'
	}
	,
	{
		id:'r10',
		type:'关系',
		name:'同行',
		entities:['e1','e10'],
		datef:'20160101',
		datet:'20171201'
	}
	,
	{
		id:'r11',
		type:'关系',
		name:'同行',
		entities:['e1','e11'],
		datef:'20160101',
		datet:'20171201'
	}
	
];

