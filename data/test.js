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
	},
];
datas.events = [
	{
		id:'ev1',
		type:'事件',
		name:'快递',
		date:'20131008',
		entities:['e1','e2'],
		relations:['r1','r2'],
		position:'122.070898 30.02662'
	},
	{
		id:'ev2',
		type:'事件',
		name:'入住',
		date:'20140208',
		entities:['e1','e3'],
		relations:['r1','r3'],
		position:'122.148224 30.006856'
	},
	{
		id:'ev3',
		type:'事件',
		name:'卡口过车',
		date:'20141008',
		entities:['e3','e2'],
		relations:['r3','r2'],
		position:'122.176107 30.025369'
	},
	{
		id:'ev4',
		type:'事件',
		name:'卡口过车',
		date:'20141008',
		entities:['e3','e2'],
		relations:['r3','r2'],
		position:'122.368345 29.937776'
	},
	{
		id:'ev5',
		type:'事件',
		name:'卡口过车',
		date:'20141008',
		entities:['e3','e2'],
		relations:['r3','r2'],
		position:'122.075066 30.127566'
	},
	{
		id:'ev6',
		type:'事件',
		name:'卡口过车',
		date:'20141008',
		entities:['e3','e2'],
		relations:['r3','r2'],
		position:'122.291809 30.066948'
	},
	{
		id:'ev7',
		type:'事件',
		name:'卡口过车',
		date:'20141008',
		entities:['e3','e2'],
		relations:['r3','r2'],
		position:'122.330472 29.976389'
	},
	{
		id:'ev8',
		type:'事件',
		name:'卡口过车',
		date:'20141008',
		entities:['e3','e2'],
		relations:['r3','r2'],
		position:'122.309488 29.961371'
	},
	{
		id:'ev9',
		type:'事件',
		name:'卡口过车',
		date:'20141008',
		entities:['e3','e2'],
		relations:['r3','r2'],
		position:'122.132198 29.99666'
	},
	{
		id:'ev10',
		type:'事件',
		name:'卡口过车',
		date:'20141008',
		entities:['e3','e2'],
		relations:['r3','r2'],
		position:'122.147433 30.006543'
	},
	{
		id:'ev11',
		type:'事件',
		name:'卡口过车',
		date:'20141008',
		entities:['e3','e2'],
		relations:['r3','r2'],
		position:'122.127383 30.007794'
	},
	{
		id:'ev12',
		type:'事件',
		name:'卡口过车',
		date:'20141008',
		entities:['e3','e2'],
		relations:['r3','r2'],
		position:'122.110782 30.032748'
	},
	{
		id:'ev13',
		type:'事件',
		name:'卡口过车',
		date:'20141008',
		entities:['e3','e2'],
		relations:['r3','r2'],
		position:'122.122137 30.025056'
	},
	{
		id:'ev14',
		type:'事件',
		name:'卡口过车',
		date:'20141008',
		entities:['e3','e2'],
		relations:['r3','r2'],
		position:'122.113513 30.025306'
	},
	{
		id:'ev15',
		type:'事件',
		name:'卡口过车',
		date:'20141008',
		entities:['e3','e2'],
		relations:['r3','r2'],
		position:'122.091882 30.01974'
	},
	{
		id:'ev16',
		type:'事件',
		name:'卡口过车',
		date:'20141008',
		entities:['e3','e2'],
		relations:['r3','r2'],
		position:'122.105105 30.031185'
	},
	{
		id:'ev17',
		type:'事件',
		name:'卡口过车',
		date:'20141008',
		entities:['e3','e2'],
		relations:['r3','r2'],
		position:'122.176107 30.025369'
	},
	{
		id:'ev18',
		type:'事件',
		name:'卡口过车',
		date:'20141008',
		entities:['e3','e2'],
		relations:['r3','r2'],
		position:'122.10029 30.024056'
	},
	{
		id:'ev19',
		type:'事件',
		name:'卡口过车',
		date:'20141008',
		entities:['e3','e2'],
		relations:['r3','r2'],
		position:'122.101799 30.021054'
	},
	{
		id:'ev20',
		type:'事件',
		name:'卡口过车',
		date:'20141008',
		entities:['e3','e2'],
		relations:['r3','r2'],
		position:'122.110279 30.01874'
	},
	{
		id:'ev21',
		type:'事件',
		name:'卡口过车',
		date:'20141008',
		entities:['e3','e2'],
		relations:['r3','r2'],
		position:'122.116028 30.01849'
	},
	{
		id:'ev22',
		type:'事件',
		name:'卡口过车',
		date:'20141008',
		entities:['e3','e2'],
		relations:['r3','r2'],
		position:'122.091882 30.026244'
	},
	{
		id:'ev23',
		type:'事件',
		name:'卡口过车',
		date:'20141008',
		entities:['e3','e2'],
		relations:['r3','r2'],
		position:'122.127527 30.016363'
	}
];


datas.relations = [
	{
		id:'r1',
		type:'关系',
		name:'亲属',
		entities:['e1','e2']
	},
	{
		id:'r2',
		type:'关系',
		name:'同住',
		entities:['e1','e3']
	},
	{
		id:'r3',
		type:'关系',
		name:'同行',
		entities:['e3','e2']
	}
];

