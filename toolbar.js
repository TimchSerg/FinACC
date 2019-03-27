var Test_json = {
	fields:[
		{id: '1', name:"firm", caption:" Фирма"},
		{id: '2', name:"storehouse", caption:" Склад"},
		{id: '3', name:"good", caption:" Номенклатура"},
		{id: '4', name:"provider", caption:"Поставщик"},
		{id: '5', name:"customer", caption:"Покупатель"},
		{id: '6', name:"count", caption:"Количество"},
		{id: '7', name:"sum", caption:" Сумма"},
		{id: '8', name:"checkbox", caption:"Показывать документы движения"},
	],

	group:
	["firm", "storehouse", "good", "provider", "customer"],

	sort:
	["firm", "storehouse", "good"],

    filter:
    ["firm", "storehouse", "good"],

	data:[
		{firm:"askhjhakjdskasd", storehouse:"Основной склад", good:"Хлеб покровский", provider: "Atol", customer: "ИП Мартышкин", count:"3", sum:"90"},
		{firm:"ВТИ", storehouse:"Основной склад", good:"Хлеб покровский", provider: "Atol", customer: "ИП Мартышкин", count:"3", sum:"90"},
		{firm:"ВТИ СЕРВИС", storehouse:"Основной склад", good:"Хлеб покровский", provider: "Atol", customer: "ИП Мартышкин", count:"3", sum:"90"},
		{firm:"ВТИ СЕРВИС", storehouse:"Основной склад", good:"Батон", provider: "Ratol", customer: "ИП Мартышкин", count:"3", sum:"90"},
		{firm:"ВТИ", storehouse:"Основной склад", good:"Хлеб покровский", provider: "Atol", customer: "ИП Мартышкин", count:"3", sum:"90"},
		{firm:"ВТИ", storehouse:"Склад ВТИ", good:"Хлеб покровский", provider: "Ratol", customer: "ИП Мартышкин", count:"3", sum:"90"},
		{firm:"ВТИ", storehouse:"Основной склад", good:"Хлеб покровский", provider: "Ratol", customer: "ИП Мартышкин", count:"3", sum:"90"},
		{firm:"DNS", storehouse:"Тупо склад", good:"Мобилка", count:"3", provider: "Ratol", customer: "ИП Мартышкин", sum:"90"},
		{firm:"DNS", storehouse:"склад", good:"Кровать", provider: "Atol", customer: "ИП Мартышкин", count:"10", sum:"12000"},
		{firm:"ВТИ СЕРВИС", storehouse:"Основной склад", good:"Хлеб покровский", provider: "Ratol", customer: "ИП Мартышкин", count:"3", sum:"90"},
		{firm:"ВТри ногиСЕРВИС", storehouse:"Основной склад", good:"Батон", provider: "Ratol", customer: "ИП Мартышкин", count:"3", sum:"90"},
		{firm:"ВТИ", storehouse:"Склад ВТИ", good:"Хлеб покровский", provider: "Ratol", customer: "ИП Мартышкин", count:"3", sum:"90"},
		{firm:"ВТИ", storehouse:"Склад ВТИ", good:"Хлеб покровский", provider: "Atol", customer: "ИП Мартышкин", count:"3", sum:"90"},
		{firm:"ВТИ", storehouse:"Основной склад", good:"Касса покровский", provider: "Atol", customer: "ИП Мартышкин", count:"3", sum:"90"},
		{firm:"Гринн", storehouse:"Тупо склад", good:"Мобилка", count:"3", provider: "Atol", customer: "ИП Мартышкин", sum:"90"},
		{firm:"DNS", storehouse:"склад", good:"Кровать", provider: "Atol", customer: "ИП Мартышкин", count:"10", sum:"12000"},
		{firm:"Три ноги", storehouse:"Основной склад", good:"Хлеб покровский", provider: "Atol", customer: "ИП Мартышкин", count:"3", sum:"90"},
		{firm:"ВТИ СЕРВИС", storehouse:"Основной склад", good:"Касса покровский", provider: "Atol", customer: "ИП Мартышкин", count:"3", sum:"90"},
		{firm:"ВТИ СЕРВИС", storehouse:"Основной склад", good:"Батон", provider: "Atol", customer: "ИП Мартышкин", count:"3", sum:"90"},
		{firm:"ВТИ", storehouse:"Тупо Основной склад", good:"Хлеб покровский", provider: "Atol", customer: "ИП Мартышкин", count:"3", sum:"90"},
		{firm:"ВТИ", storehouse:"Тупо Основной склад", good:"Хлеб покровский", provider: "Atol", customer: "ИП Мартышкин", count:"3", sum:"90"},
		{firm:"ВТИ", storehouse:"Основной склад", good:"Хлеб покровский", provider: "Atol", customer: "ИП Мартышкин", count:"3", sum:"90"},
		{firm:"DNS", storehouse:"Тупо склад", good:"Мобилка", count:"3", provider: "Atol", customer: "ИП Мартышкин", sum:"90"},
		{firm:"DNS", storehouse:"склад", good:"Кровать", provider: "Atol", customer: "ИП Мартышкин", count:"10", sum:"12000"},
		{firm:"м", storehouse:"Основной склад", good:"Хлеб покровский", provider: "Atol", customer: "ИП Мартышкин", count:"3", sum:"90"},
		{firm:"Три ноги СЕРВИС", storehouse:"Основной склад", good:"Хлеб покровский", provider: "Atol", customer: "ИП Мартышкин", count:"3", sum:"90"},
		{firm:"Гринн СЕРВИС", storehouse:"Основной склад", good:"Батон", provider: "Atol", customer: "ИП Мартышкин", count:"3", sum:"90"},
		{firm:"ВТИ", storehouse:"Тупо Основной склад", good:"Хлеб покровский", provider: "Atol", customer: "ИП Мартышкин", count:"3", sum:"90"},
		{firm:"ВТИ", storehouse:"Основной склад", good:"Касса покровский", provider: "Atol", customer: "ИП Мартышкин", count:"3", sum:"90"},
		{firm:"м", storehouse:"Склад ВТИ", good:"Хлеб Касса", provider: "Atol", customer: "ИП Мартышкин", count:"3", sum:"90"},
		{firm:"DNS", storehouse:"Тупо склад", good:"Мобилка", count:"3", provider: "Atol", customer: "ИП Мартышкин", sum:"90"},
		{firm:"DNS", storehouse:"склад", good:"Кровать", provider: "Atol", customer: "ИП Мартышкин", count:"10", sum:"12000"},
		{firm:"ВТИ", storehouse:"Основной склад", good:"Хлеб покровский", provider: "Atol", customer: "ИП Мартышкин", count:"3", sum:"90"},
		{firm:"ВТИ СЕРВИС", storehouse:"Основной склад", good:"Хлеб покровский", provider: "Atol", customer: "ИП Мартышкин", count:"3", sum:"90"},
		{firm:"ВТИ СЕРВИС", storehouse:"Основной склад", good:"Батон", provider: "Atol", customer: "ИП Мартышкин", count:"3", sum:"90"},
		{firm:"ВТИ", storehouse:"Основной склад", good:"Хлеб покровский", provider: "Atol", customer: "ИП Мартышкин", count:"3", sum:"90"},
		{firm:"ВТИ", storehouse:"Склад ВТИ", good:"Хлеб покровский", provider: "Atol", customer: "ИП Мартышкин", count:"3", sum:"90"},
		{firm:"ВТИ", storehouse:"Основной склад", good:"Хлеб покровский", provider: "Atol", customer: "ИП Мартышкин", count:"3", sum:"90"},
		{firm:"DNS", storehouse:"Тупо склад", good:"Мобилка", count:"3", provider: "Atol", customer: "ИП Мартышкин", sum:"90"},
		{firm:"DNS", storehouse:"склад", good:"Кровать", provider: "Atol", customer: "ИП Мартышкин", count:"10", sum:"12000"},
		{firm:"ВТИ", storehouse:"Основной склад", good:"Хлеб покровский", provider: "Atol", customer: "ИП Мартышкин", count:"3", sum:"90"},
		{firm:"ВТИ СЕРВИС", storehouse:"Основной склад", good:"Хлеб покровский", provider: "Atol", customer: "ИП Мартышкин", count:"3", sum:"90"},
		{firm:"ВТИ СЕРВИС", storehouse:"Основной склад", good:"Батон", provider: "Atol", customer: "ИП Мартышкин", count:"3", sum:"90"},
		{firm:"Гринн", storehouse:"Основной склад", good:"Хлеб покровский", provider: "Atol", customer: "ИП Мартышкин", count:"3", sum:"90"},
		{firm:"ВТИ", storehouse:"Основной склад", good:"Хлеб покровский", provider: "Atol", customer: "ИП Мартышкин", count:"3", sum:"90"},
		{firm:"ВТИ", storehouse:"Основной склад", good:"Хлеб", provider: "Atol", customer: "ИП Мартышкин", count:"3", sum:"90"},
		{firm:"DNS", storehouse:"Тупо склад", good:"Мобилка", count:"3", provider: "Atol", customer: "ИП Мартышкин", sum:"90"},
		{firm:"DNS", storehouse:"склад", good:"Кровать", provider: "Atol", customer: "ИП Мартышкин", count:"10", sum:"12000"},
		{firm:"ВТИ", storehouse:"Основной склад", good:"Хлеб", provider: "Atol", customer: "ИП Мартышкин", count:"3", sum:"90"},
		{firm:"ВТИ Гринн", storehouse:"Основной склад", good:"Хлеб покровский", provider: "Atol", customer: "ИП Мартышкин", count:"3", sum:"90"},
		{firm:"ВТИ Гринн", storehouse:"Основной склад", good:"Батон", provider: "Atol", customer: "ИП Мартышкин", count:"3", sum:"90"},
		{firm:"ВТИ", storehouse:"Склад ВТИ", good:"Хлеб покровский", provider: "Atol", customer: "ИП Мартышкин", count:"3", sum:"90"},
		{firm:"Гринн", storehouse:"Основной склад", good:"Хлеб покровский", provider: "Atol", customer: "ИП Мартышкин", count:"3", sum:"90"},
		{firm:"ВТИ", storehouse:"Основной склад", good:"Хлеб покровский", provider: "Atol", customer: "ИП Мартышкин", count:"3", sum:"90"},
		{firm:"DNS", storehouse:"Тупо склад", good:"Мобилка", count:"3", provider: "Atol", customer: "ИП Мартышкин", sum:"90"},
		{firm:"Три ноги", storehouse:"склад", good:"Кровать", provider: "Atol", customer: "ИП Мартышкин", count:"10", sum:"12000"},
		{firm:"Три ноги", storehouse:"Основной склад", good:"Хлеб покровский", provider: "Atol", customer: "ИП Мартышкин", count:"3", sum:"90"},
		{firm:"ВТри ногиСЕРВИС", storehouse:"Основной склад", good:"покровский", provider: "Atol", customer: "ИП Мартышкин", count:"3", sum:"90"},
		{firm:"ВТИ СЕРВИС", storehouse:"Основной склад", good:"Батон", provider: "Atol", customer: "ИП Мартышкин", count:"3", sum:"90"},
		{firm:"ВТИ", storehouse:"Основной склад", good:"Хлеб покровский", provider: "Atol", customer: "ИП Мартышкин", count:"3", sum:"90"},
		{firm:"Три ноги", storehouse:"Основной склад", good:"покровский", provider: "Atol", customer: "ИП Мартышкин", count:"3", sum:"90"},
		{firm:"ВТИ", storehouse:"Основной склад", good:"Хлеб покровский", provider: "Atol", customer: "ИП Мартышкин", count:"3", sum:"90"},
		{firm:"DNS", storehouse:"Тупо склад", good:"Мобилка", count:"3", provider: "Atol", customer: "ИП Мартышкин", sum:"90"},
		{firm:"DNS", storehouse:"склад", good:"Кровать", provider: "Atol", customer: "ИП Мартышкин", count:"10", sum:"12000"},
		{firm:"ВТИ", storehouse:"Основной склад", good:"Хлеб", provider: "Atol", customer: "ИП Мартышкин", count:"3", sum:"90"},
		{firm:"ВТИ СЕРВИС", storehouse:"Склад ВТИ", good:"Касса", provider: "Atol", customer: "ИП Мартышкин", count:"3", sum:"90"},
		{firm:"ВТИ СЕРВИС", storehouse:"Основной склад", good:"Батон", provider: "Atol", customer: "ИП Мартышкин", count:"3", sum:"90"},
		{firm:"ВТИ", storehouse:"Основной склад", good:"Хлеб покровский", provider: "Atol", customer: "ИП Мартышкин", count:"3", sum:"90"},
		{firm:"ВТИ", storehouse:"Основной склад", good:"Хлеб Касса", provider: "Atol", customer: "ИП Мартышкин", count:"3", sum:"90"},
		{firm:"Гринн", storehouse:"Основной склад", good:"Хлеб покровский", provider: "Atol", customer: "ИП Мартышкин", count:"3", sum:"90"},
		{firm:"DNS", storehouse:"Тупо склад", good:"Мобилка", count:"3", provider: "Atol", customer: "ИП Мартышкин", sum:"90"},
		{firm:"DNS", storehouse:"склад", good:"Кровать", provider: "Atol", customer: "ИП Мартышкин", count:"10", sum:"12000"},
		{firm:"ВТИ", storehouse:"Тупо Основной склад", good:"Хлеб", provider: "Atol", customer: "ИП Мартышкин", count:"3", sum:"90"},
		{firm:"ВТИ СЕРВИС", storehouse:"Основной склад", good:"Хлеб покровский", provider: "Atol", customer: "ИП Мартышкин", count:"3", sum:"90"},
		{firm:"ВТри ногиСЕРВИС", storehouse:"Основной склад", good:"Батон", provider: "Atol", customer: "ИП Мартышкин", count:"3", sum:"90"},
		{firm:"ВТИ", storehouse:"Склад ВТИ", good:"Хлеб покровский", provider: "Atol", customer: "ИП Мартышкин", count:"3", sum:"90"},
		{firm:"ВТИ", storehouse:"Склад ВТИ", good:"Хлеб покровский", provider: "Atol", customer: "ИП Мартышкин", count:"3", sum:"90"},
		{firm:"ВТИ", storehouse:"Основной склад", good:"Касса покровский", provider: "Atol", customer: "ИП Мартышкин", count:"3", sum:"90"},
		{firm:"Гринн", storehouse:"Тупо склад", good:"Мобилка", count:"3", provider: "Atol", customer: "ИП Мартышкин", sum:"90"},
		{firm:"DNS", storehouse:"склад", good:"Кровать", provider: "Atol", customer: "ИП Мартышкин", count:"10", sum:"12000"},
		{firm:"Три ноги", storehouse:"Основной склад", good:"Хлеб покровский", provider: "Atol", customer: "ИП Мартышкин", count:"3", sum:"90"},
		{firm:"ВТИ СЕРВИС", storehouse:"Основной склад", good:"Касса покровский", provider: "Atol", customer: "ИП Мартышкин", count:"3", sum:"90"},
		{firm:"ВТИ СЕРВИС", storehouse:"Основной склад", good:"Батон", provider: "Atol", customer: "ИП Мартышкин", count:"3", sum:"90"},
		{firm:"ВТИ", storehouse:"Тупо Основной склад", good:"Хлеб покровский", provider: "Atol", customer: "ИП Мартышкин", count:"3", sum:"90"},
		{firm:"ВТИ", storehouse:"Тупо Основной склад", good:"Хлеб покровский", provider: "Atol", customer: "ИП Мартышкин", count:"3", sum:"90"},
		{firm:"ВТИ", storehouse:"Основной склад", good:"Хлеб покровский", provider: "Atol", customer: "ИП Мартышкин", count:"3", sum:"90"},
		{firm:"DNS", storehouse:"Тупо склад", good:"Мобилка", count:"3", provider: "Atol", customer: "ИП Мартышкин", sum:"90"},
		{firm:"DNS", storehouse:"склад", good:"Кровать", provider: "Atol", customer: "ИП Мартышкин", count:"10", sum:"12000"},
		{firm:"м", storehouse:"Основной склад", good:"Хлеб покровский", provider: "Atol", customer: "ИП Мартышкин", count:"3", sum:"90"},
		{firm:"Три ноги СЕРВИС", storehouse:"Основной склад", good:"Хлеб покровский", provider: "Atol", customer: "ИП Мартышкин", count:"3", sum:"90"},
		{firm:"Гринн СЕРВИС", storehouse:"Основной склад", good:"Батон", provider: "Atol", customer: "ИП Мартышкин", count:"3", sum:"90"},
		{firm:"ВТИ", storehouse:"Тупо Основной склад", good:"Хлеб покровский", provider: "Atol", customer: "ИП Мартышкин", count:"3", sum:"90"},
		{firm:"ВТИ", storehouse:"Основной склад", good:"Касса покровский", provider: "Atol", customer: "ИП Мартышкин", count:"3", sum:"90"},
		{firm:"м", storehouse:"Склад ВТИ", good:"Хлеб Касса", provider: "Atol", customer: "ИП Мартышкин", count:"3", sum:"90"},
		{firm:"DNS", storehouse:"Тупо склад", good:"Мобилка", count:"3", provider: "Atol", customer: "ИП Мартышкин", sum:"90"},
		{firm:"DNS", storehouse:"склад", good:"Кровать", provider: "Atol", customer: "ИП Мартышкин", count:"10", sum:"12000"},
		{firm:"ВТИ", storehouse:"Основной склад", good:"Хлеб покровский", provider: "Atol", customer: "ИП Мартышкин", count:"3", sum:"90"},
		{firm:"ВТИ СЕРВИС", storehouse:"Основной склад", good:"Хлеб покровский", provider: "Atol", customer: "ИП Мартышкин", count:"3", sum:"90"},
		{firm:"ВТИ СЕРВИС", storehouse:"Основной склад", good:"Батон", provider: "Atol", customer: "ИП Мартышкин", count:"3", sum:"90"},
		{firm:"ВТИ", storehouse:"Основной склад", good:"Хлеб покровский", provider: "Atol", customer: "ИП Мартышкин", count:"3", sum:"90"},
		{firm:"ВТИ", storehouse:"Склад ВТИ", good:"Хлеб покровский", provider: "Atol", customer: "ИП Мартышкин", count:"3", sum:"90"},
		{firm:"ВТИ", storehouse:"Основной склад", good:"Хлеб покровский", provider: "Atol", customer: "ИП Мартышкин", count:"3", sum:"90"},
		{firm:"DNS", storehouse:"Тупо склад", good:"Мобилка", count:"3", provider: "Atol", customer: "ИП Мартышкин", sum:"90"},
		{firm:"DNS", storehouse:"склад", good:"Кровать", provider: "Atol", customer: "ИП Мартышкин", count:"10", sum:"12000"},
		{firm:"ВТИ", storehouse:"Основной склад", good:"Хлеб покровский", provider: "Atol", customer: "ИП Мартышкин", count:"3", sum:"90"},
		{firm:"ВТИ СЕРВИС", storehouse:"Основной склад", good:"Хлеб покровский", provider: "Atol", customer: "ИП Мартышкин", count:"3", sum:"90"},
		{firm:"ВТИ СЕРВИС", storehouse:"Основной склад", good:"Батон", provider: "Atol", customer: "ИП Мартышкин", count:"3", sum:"90"},
		{firm:"Гринн", storehouse:"Основной склад", good:"Хлеб покровский", provider: "Atol", customer: "ИП Мартышкин", count:"3", sum:"90"},
		{firm:"ВТИ", storehouse:"Основной склад", good:"Хлеб покровский", provider: "Atol", customer: "ИП Мартышкин", count:"3", sum:"90"},
		{firm:"ВТИ", storehouse:"Основной склад", good:"Хлеб", provider: "Atol", customer: "ИП Мартышкин", count:"3", sum:"90"},
		{firm:"DNS", storehouse:"Тупо склад", good:"Мобилка", count:"3", provider: "Atol", customer: "ИП Мартышкин", sum:"90"},
		{firm:"DNS", storehouse:"склад", good:"Кровать", provider: "Atol", customer: "ИП Мартышкин", count:"10", sum:"12000"},
		{firm:"ВТИ", storehouse:"Основной склад", good:"Хлеб", provider: "Atol", customer: "ИП Мартышкин", count:"3", sum:"90"},
		{firm:"ВТИ Гринн", storehouse:"Основной склад", good:"Хлеб покровский", provider: "Atol", customer: "ИП Мартышкин", count:"3", sum:"90"},
		{firm:"ВТИ Гринн", storehouse:"Основной склад", good:"Батон", provider: "Atol", customer: "ИП Мартышкин", count:"3", sum:"90"},
		{firm:"ВТИ", storehouse:"Склад ВТИ", good:"Хлеб покровский", provider: "Atol", customer: "ИП Мартышкин", count:"3", sum:"90"},
		{firm:"Гринн", storehouse:"Основной склад", good:"Хлеб покровский", provider: "Atol", customer: "ИП Мартышкин", count:"3", sum:"90"},
		{firm:"ВТИ", storehouse:"Основной склад", good:"Хлеб покровский", provider: "Atol", customer: "ИП Мартышкин", count:"3", sum:"90"},
		{firm:"DNS", storehouse:"Тупо склад", good:"Мобилка", count:"3", provider: "Atol", customer: "ИП Мартышкин", sum:"90"},
		{firm:"Три ноги", storehouse:"склад", good:"Кровать", provider: "Atol", customer: "ИП Мартышкин", count:"10", sum:"12000"},
		{firm:"Три ноги", storehouse:"Основной склад", good:"Хлеб покровский", provider: "Atol", customer: "ИП Мартышкин", count:"3", sum:"90"},
		{firm:"ВТри ногиСЕРВИС", storehouse:"Основной склад", good:"покровский", provider: "Atol", customer: "ИП Мартышкин", count:"3", sum:"90"},
		{firm:"ВТИ СЕРВИС", storehouse:"Основной склад", good:"Батон", provider: "Atol", customer: "ИП Мартышкин", count:"3", sum:"90"},
		{firm:"ВТИ", storehouse:"Основной склад", good:"Хлеб покровский", provider: "Atol", customer: "ИП Мартышкин", count:"3", sum:"90"},
		{firm:"Три ноги", storehouse:"Основной склад", good:"покровский", provider: "Atol", customer: "ИП Мартышкин", count:"3", sum:"90"},
		{firm:"ВТИ", storehouse:"Основной склад", good:"Хлеб покровский", provider: "Atol", customer: "ИП Мартышкин", count:"3", sum:"90"},
		{firm:"DNS", storehouse:"Тупо склад", good:"Мобилка", count:"3", provider: "Atol", customer: "ИП Мартышкин", sum:"90"},
		{firm:"DNS", storehouse:"склад", good:"Кровать", provider: "Atol", customer: "ИП Мартышкин", count:"10", sum:"12000"},
		{firm:"ВТИ", storehouse:"Основной склад", good:"Хлеб", provider: "Atol", customer: "ИП Мартышкин", count:"3", sum:"90"},
		{firm:"ВТИ СЕРВИС", storehouse:"Склад ВТИ", good:"Касса", provider: "Atol", customer: "ИП Мартышкин", count:"3", sum:"90"},
	]
};


var arrayFiltersId = [];
var arraySelectFiltersId = [];

var filter_org = 0;
var filter_item = 0;
var filter_wh = 0;
var filter_price = 0;

var data_array_datatable = [];

function funcSortA(arraySort, sort_a, param){

    if(sort_a == 1){
        return _.orderBy(arraySort, param, ['asc'])
    }else if(sort_a == 2){
        return _.orderBy(arraySort, param, ['desc'])
    }
}

function formatReport(){
	var group_values = $$("group_dbllist_custom").getValue();
	var sort_table = $$("sort_select_1").getValue();
	var sort_alpha = $$("sort_select_2").getValue();
	var stoped = false;

	data_array_datatable = [];

	/*********************Формирование массива айдишников выбранных в группировке*******************************/
											var arrayGroupID = [];
											if(group_values != 0){
												var res = group_values.split(',');
												Test_json.fields.forEach(function(item){
													res.map(function(item2){
														if(item2 == item.id){
															arrayGroupID.push(item.name);
														}
													})
												});
											}
	//////////**************************************//////////////
///*****************************************Сортировка*****************************************************///////////
var arrayFullData = funcSortA(Test_json.data, sort_alpha, sort_table);
//////////*******************************************/////////////////////

	var arrayfiltersAndData = [];
	arraySelectFiltersId.forEach(function(item){
	 var valueSelect = $$(item.id_filter).getValue();
	 if(valueSelect != 0){
		 for(var i = 0; i <= item.data.length-1; i++){
				if(valueSelect == item.data[i].id){
					arrayfiltersAndData.push({id: item.id_filter.slice(14, ), value: item.data[i].value});
				}
		 }
	 }
	})

	///////*********************************//////////////
	function recurFunc2(a, b, group, arr_key, count, color){
		var arr = [];
		var colorNumber = color + 121212;
		a = a+1;
		for(b; b < arrayFiltersId.length; b++){

			if(arrayGroupID[a] == arrayFiltersId[b]){
				count++;


				var groupDown = (Test_json.group.length == arrayGroupID.length) ? _.groupBy(group[arr_key], arrayFiltersId[count-1]) : _.groupBy(group[arr_key], arrayFiltersId[count]);
				//////////*******************фильтрация *************************////////////////
								   		if(arrayfiltersAndData.length != 0){
											var status = 0;

											arrayfiltersAndData.forEach(function(item){
												if(item.id == arrayFiltersId[b]){
													status = 1;
												}
											})

											if(status == 1){
												var objFilter = arrayfiltersAndData.filter(function(item){ return item.id == arrayFiltersId[b]});
												for(key2 in groupDown){
													if(objFilter[0].value == key2){
														var resultArray = {
														   name: key2,
														   $css:{ background:"#" + colorNumber, "color": "white" },
														   open: true,
														   quantity: groupDown[key2].reduce(function(sum, n){ return sum + +n.count}, 0),
														   sum: groupDown[key2].reduce(function(sum, n){ return sum + +n.sum}, 0),
														   data: (res.length == count) ? groupDown[key2].map(function(item){
																						   return {
																							   name: item.good,
																							   quantity: item.count,
																							   sum: item.sum,
																							   open: true
																						   };
																					   })
																					   : recurFunc2(a, 0, groupDown, key2, count, colorNumber)
													   };
													   arr.push(resultArray);
													}
												}

											}else {
												for(key2 in groupDown){

													var resultArray = {
													   name: key2,
													   $css:{ background:"#" + colorNumber, "color": "white" },
													   open: true,
													   quantity: groupDown[key2].reduce(function(sum, n){ return sum + +n.count}, 0),
													   sum: groupDown[key2].reduce(function(sum, n){ return sum + +n.sum}, 0),
													   data: (res.length == count) ? groupDown[key2].map(function(item){
																					   return {
																						   name: item.good,
																						   quantity: item.count,
																						   sum: item.sum,
																						   open: true
																					   };
																				   })
																				   : recurFunc2(a, 0, groupDown, key2, count, colorNumber)
												   };
												   arr.push(resultArray);
												}
											}
				 						 stoped = true;
										}
				//////////*******************фильтрация *************************////////////////
				else{
					for(key2 in groupDown){
						arr.push({
							name: key2,
							$css:{ background:"#" + colorNumber, "color": "white" },
							open: true,
							quantity: groupDown[key2].reduce(function(sum, n){ return sum + +n.count}, 0),
							sum: groupDown[key2].reduce(function(sum, n){ return sum + +n.sum}, 0),
							data: (res.length == count) ? groupDown[key2].map(function(item){
															return {
																name: item.good,
																quantity: item.count,
																sum: item.sum,
																open: true
															};
														})
														: recurFunc2(a, 0, groupDown, key2, count, colorNumber)
						})
					}
				}
			}
		}

		return arr;
	}

	function startFunc(iA, iB){
		var lengthGroup = Test_json.group.length;
	   for(var i = iA; i <= arrayFiltersId.length-1; i++){
		   for(var j = iB; j < arrayFiltersId.length; j++){
			   if(arrayGroupID[i] == arrayFiltersId[j] && stoped == false){
				   var counter = 1;
				   var colorNumber = 303030;
				   var grouppedFirst =_.groupBy(arrayFullData, arrayFiltersId[j]);
//////////*******************фильтрация *************************////////////////
				   		if(arrayfiltersAndData.length != 0){
							var status = 0;
							arrayfiltersAndData.forEach(function(item){
								if(item.id == arrayFiltersId[j]){
									status = 1;
								}
							})
							if(status == 1){
								var objFilter = arrayfiltersAndData.filter(function(item){ return item.id == arrayFiltersId[j]});

								for(key in grouppedFirst){
									if(objFilter[0].value == key){

										var resultArray = {
										   $css:{ background:"#" + colorNumber, "color": "white" },
										   name: key,
										   open: true,
										   quantity: grouppedFirst[key].reduce(function(sum, n){ return sum + +n.count}, 0),
										   sum: grouppedFirst[key].reduce(function(sum, n){ return sum + +n.sum}, 0),
										   data: (res.length == counter) ? grouppedFirst[key].map(function(item){
																		   return {
																			   name: item.good,
																			   quantity: item.count,
																			   sum: item.sum,
																			   open: true
																		   };
																	   })
																	   : recurFunc2(i, 0, grouppedFirst, key, counter, colorNumber)
									   };
									   data_array_datatable.push(resultArray);
									}
								}

							}else {
								for(key in grouppedFirst){
									var resultArray = {
									   name: key,
									   $css:{ background:"#" + colorNumber, "color": "white" },
									   open: true,
									   quantity: grouppedFirst[key].reduce(function(sum, n){ return sum + +n.count}, 0),
									   sum: grouppedFirst[key].reduce(function(sum, n){ return sum + +n.sum}, 0),
									   data: (res.length == counter) ? grouppedFirst[key].map(function(item){
																	   return {
																		   name: item.good,
																		   quantity: item.count,
																		   sum: item.sum,
																		   open: true
																	   };
																   })
																   : recurFunc2(i, 0, grouppedFirst, key, counter, colorNumber)
								   };
								   data_array_datatable.push(resultArray);
								}
							}
 						 stoped = true;
						}
//////////*******************фильтрация *************************////////////////
						else {
							for(key in grouppedFirst){
 							   var resultArray = {
 								   name: key,
								   $css:{ background:"#" + colorNumber, "color": "white" },
 								   open: true,
 								   quantity: grouppedFirst[key].reduce(function(sum, n){ return sum + +n.count}, 0),
 								   sum: grouppedFirst[key].reduce(function(sum, n){ return sum + +n.sum}, 0),
 								   data: (res.length == counter) ? grouppedFirst[key].map(function(item){
 																   return {
 																	   name: item.good,
 																	   quantity: item.count,
 																	   sum: item.sum,
 																	   open: true
 																   };
 															   })
 															   : recurFunc2(i, 0, grouppedFirst, key, counter, colorNumber)
 							   };
 								   data_array_datatable.push(resultArray);
 						   }

 						  stoped = true;
						}

			   }
		   }
	   }
	}
startFunc(0,0);

var form_report = {
	view:"treetable",
	id: "save_report",
	css: "tab_style", //tyt
	columns:[
		{ id:"name",   header:"Наименование", fillspace:true, template: "{common.treetable()} #name#"},
		{ id:"quantity",    header:"Общее кол-во", width: 200, },
		{ id:"sum",    header:"Общая сумма", width: 200, },
	],
	data: data_array_datatable
};

	var windowReport = {
	     view:"window",
	     id:"window_report",
	     modal:false,
	     toFront: true,
	     move: false,
	     fullscreen:true,

	     head: {
	         cols: [
	             {width: 15},
	             {view: "label", label: "Отчет", },

	             {view: "button", css: "icon_btn", type: "icon", icon: "wxi-close", width: 50, click: " $$('window_report').close(); "}
	         ]
	     },
	     autofit:false,
	     body: {
	       rows: [
	         form_report,
	         {
	             type: "line",
	             cols: [
	                 {
	                     view: "button",
	                     css: "icon_btn",
	                     type: "form",
	                     value: "PDF",
	                     click: function(){
	                         webix.toPDF($$("save_report"), {
	                            autowidth:true
	                        });
	                     },
	                     width: 100
	                 },
	                 {
	                     view: "button",
	                     css: "icon_btn",
	                     type: "form",
	                     value: "Excel",
	                     click: function(){
	                         webix.toExcel($$("save_report"), {
	                            styles:true
	                        });
	                     },
	                     width: 100
	                 },
	                 {
	                       view:"button", value:"Print", type: "form", css: "icon_btn",
	                       click:function(){
	                         webix.print($$("save_report"),{
	                          mode:"landscape",
	                          fit:"data"
	                        });
	                       },
	                       width: 100
	                 }
	             ]
	         },
	       ]
	     }
	   };


	       webix.ui(windowReport)
	                $$("window_report").show();

}

var table_config =  [
    {
        name: "По умолчанию",
        data_value: [
            {id: "filter_select_org", value: 1},
            {id: "filter_select_item", value: 1},
            {id: "filter_select_wh", value: 1},
            {id: "filter_select_price", value: 1},
            {id: "sort_select_1", value: 1},
            {id: "sort_select_2", value: 1},
            {id: "group_dbllist_custom", value: '1'}
        ],
    },
    {
        name: "Основная 1",
        data_value: [
            {id: "filter_select_org", value: 2},
            {id: "filter_select_item", value: 2},
            {id: "filter_select_wh", value: 2},
            {id: "filter_select_price", value: 2},
            {id: "sort_select_1", value: 2},
            {id: "sort_select_2", value: 2},
            {id: "group_dbllist_custom", value: "1,2"}
        ]
    },
    {
        name: "Основная 2",
        data_value: [
            {id: "filter_select_org", value: 3},
            {id: "filter_select_item", value: 2},
            {id: "filter_select_wh", value: 3},
            {id: "filter_select_price", value: 3},
            {id: "sort_select_1", value: 1},
            {id: "sort_select_2", value: 2},
            {id: "group_dbllist_custom", value: "2,3"}
        ]
    },
    {
        name: "Основная 3",
        data_value: [
            {id: "filter_select_org", value: 3},
            {id: "filter_select_item", value: 4},
            {id: "filter_select_wh", value: 2},
            {id: "filter_select_price", value: 1},
            {id: "sort_select_1", value: 2},
            {id: "sort_select_2", value: 1},
            {id: "group_dbllist_custom", value: "2,3,4"}
        ]
    },

];

var client_conf = [
        {id: "default", value: "По умолчанию", status: 1},
        {id: "basic 1", value: "Основная 1", status: 0},
        {id: "basic 2", value: "Основная 2", status: 0},
        {id: "basic 3", value: "Основная 3", status: 0}
];

/******************************* function *****************************************************/
function winOrg(){
    if( $$("window_organization").config.hidden){
        $$("window_organization").show({x:200, y:150 });
    }
}

function winReport(){
    webix.ui(windowReport)
             $$("window_report").show();
}



function set_config(){
    $$("tab_config_two").eachRow(function(row){
        var temp = $$("tab_config_two").getItem(row);
        if(temp.status == 1){
            table_config.map(function(item){
                if(item.name == temp.value){
                    var arrDataValue = item.data_value;
                    //console.log(arrDataValue);
                    arrDataValue.map(function(itemTwo){
                        return $$(itemTwo.id).setValue(itemTwo.value);
                    });
                }
            })
        }
    })
}

function get_config(){
    var org_value = $$("filter_select_org").getValue() || 1;
    var items_value = $$("filter_select_item").getValue() || 1;
    var wh_value = $$("filter_select_wh").getValue() || 1;
    var price_value = $$("filter_select_price").getValue() || 1;

    var group_values = $$("group_dbllist_custom").getValue();

    var sort_table = $$("sort_select_1").getValue() || 1;
    var sort_alpha = $$("sort_select_2").getValue() || 1;

    var name_conf = $$("text_name_config").getValue();

    var new_save_config = {
            name: name_conf,
            data_value: [
                {id: "filter_select_org", value: org_value},
                {id: "filter_select_item", value: items_value},
                {id: "filter_select_wh", value: wh_value},
                {id: "filter_select_price", value: price_value},
                {id: "sort_select_1", value: sort_table},
                {id: "sort_select_2", value: sort_alpha},
                {id: "group_dbllist_custom", value: group_values}
            ]

    };
    var resTF = false;

    client_conf.forEach(function(item){
        if(item.value == name_conf){
            return resTF = true;
        }

    });

    if(resTF != true){

        $$("tab_config_two").eachRow(function(row){
            var pr = $$("tab_config_two").getItem(row);
                pr.status = 0
                $$("tab_config_two").refresh();
        })

        var new_conf_name = {id: new Date().getTime(), value: name_conf, status: 1};

        table_config.push(new_save_config);
        client_conf.push(new_conf_name)

        $$("tab_config_two").define("data", client_conf );
        $$("tab_config_two").refresh();
        set_config();
    }else {
        webix.message('ошибка');
    }


}
/**************************** windows ******************************************/

        webix.ui({
          view:"window",
          id:"window_organization",
          modal:false,
          toFront: true,
          move: true,
          width:500,
          height:450,
          head:{
              cols: [
                  {width: 15},
                  {view: "label", label: "Фильтр поиска", },
                  {view: "button", type: "icon", icon: "wxi-close", width: 50, click: "$$('window_organization').hide();"}
              ]
          },
          autofit:false,
          body:{
            rows: [
              { view: "form", elements: [
                            {view: "text", name:"Наименование", placeholder: "Name", align:"center"},
                            {view: "text", name:"Полное наименование", placeholder: "Full name", align:"center"},
                            {view: "text", name:"Адрес", placeholder: "Address", align:"center"},
                            {cols: [
                                {view: "button", value: "Add", click: "$$('window_organization').hide();"},
                                {view: "button", value: "Close", click: "$$('window_organization').hide();"},
                            ]}

                        ] }
            ]
          }
      });



/**********************************************************************/

var data_firm = [];

var dblistData = [];

var list_data ={
  view:"dbllist",
  id: "group_dbllist_custom",
  list:{ height:200, scroll:true },
  labelLeft:"Доступные",
  labelRight:"Включенные",
  data:dblistData
};


var tabMenu = {
    view: "tabbar", type: "button", height: 100, multiview: true, options: [
        {value: "Конфигурации", id: "conf_custom"},
        {value: "Фильтры", id: "filter_custom"},
        {value: "Группировка", id: "group_custom"},
        {value: "Сортировка", id: "sort_custom"},

    ]
};

var leftFilterGroup = [];
var rightFilterGroup = [];

var checkboxFilter = [];

var tabbarView_first = {
            id: "filter_custom",
            view: "form",
            elements: [
                {
                   cols:[
                       {
                           rows: leftFilterGroup
                       },
                       {width: 200},
                       {
                           rows: rightFilterGroup
                       }
                   ]
                },
				{height: 200},
				{cols: checkboxFilter}
            ]
        };


var tabbarView_second = {
            view:"form", id:"group_custom", minWidth:700, css: "tab_style",
            rows:[
              {
                  view:"forminput",
                  name:"access",
                  body: list_data,
              },
            ],
};

var sortData = [];

var tabbarView_three = {
            id: "sort_custom",
            view: "form",
            css: "tab_style",
            rows: [
                {
                    cols: [
                        {id:"sort_select_1", view: "richselect", labelWidth: 200, label: "Сортировать по:", value: 0, options: sortData},
                        {width: 50},
                        {id:"sort_select_2", view: "richselect", labelWidth: 200, label: "По алфавиту:", value: 1, options: [
                            {id: "1", value: "А - Я"},
                            {id: "2", value: "Я - А"}
                        ]},
                    ]
                }
            ]
        };


var tab_config_two = {
    view: "datatable",
    id: "tab_config_two",
    css: "tab_style",
    columns:[
        { id:"value", header:"Название конфигурации", fillspace:true },
        { id:"status", header:"Активировать", width:120, css:"center", template:"{common.checkbox()}"},
    ],
    data: client_conf,
    on: {
        'onCheck': function(id){
            $$("tab_config_two").eachRow(function(row){
                var pr = $$("tab_config_two").getItem(row);
                if(pr.id != id){
                    pr.status = 0
                    $$("tab_config_two").refresh();
                }else {
                    $$("text_name_config").setValue(pr.value);
                    $$("text_name_config").refresh();
                    pr.status = 1
                }
            })

        }
    }
};

var tabbarView_four = {
    id: "conf_custom",
    css: "tab_style",
    rows: [
        {height: 10},
        {   type: "header",
            cols: [
                {width: 50},
                {id: "text_name_config", view: "text", label: "Конфигурация", value: "По умолчанию", labelWidth: 200,},
                {width: 50},
            ]
        },
        {height: 10},
        {
            cols: [
                {},
                {view: "button", css: "icon_btn", label: "Сохранить", width:200, click: get_config},

                {view: "button", css: "icon_btn", label: "Применить", width:200, click: set_config},

                {view: "button", css: "icon_btn", label: "Удалить", width:200},

                {view: "button", css: "icon_btn", label: "По умолчанию", width:200}
            ]
        },

        tab_config_two
    ]
};

//функция для использования Внутри главной функции

//Функция для динамической отрисовки страницы После получения JSON
function renderToJson(jsonFile){
    let newArray = [];
    newArray.push(jsonFile);
    newArray.forEach(function(item){
        //Формирование Таб_Фильтры
        for(var i = 0; i <= item.fields.length - 1; i++){
            for(var j = 0; j <= item.filter.length - 1; j++){
                if(item.fields[i].name == item.filter[j]){
					//Формирование данных из json
					var data_random = [];
					var grouppedFirm =_.groupBy(jsonFile.data, item.fields[i].name);
						for(key in grouppedFirm){
							data_random.push({id: data_random.length+1, value: key})
						}
					/************************/
						if( item.fields[i].name != "checkbox" ){
								var newFilter = [];
	                            var rowsArray = [];
	                            var id_filter = "filter_select_" + item.fields[j].name;
								arrayFiltersId.push(id_filter.slice(14, ));
								arraySelectFiltersId.push({id_filter: id_filter, data: data_random});
	                            newFilter.push({
	                                view: "richselect",
	                                id: id_filter,
	                                icon: "wxi-angle-down",
	                                label: item.fields[i].caption,
	                                labelPosition:"left",
	                                labelWidth:100,
									value: '0',
	                                options: data_random,
	                                css: "custom_richselect",
	                            });

	                            newFilter.push({view: "button", css: "icon_btn", type: "icon", icon: "wxi-search", width: 30, height: 30, click: winOrg, css: "custom_richselect_button"});
	                            newFilter.push({view: "button", css: "icon_btn", type: "icon", icon: "wxi-close", width: 30, height: 30, id:id_filter + 'ad', css: "custom_richselect_button", click: function(id){

									let newVar = id.slice(0, -2);
	                                $$(newVar).setValue('0')
	                            } });
	                            rowsArray.push({height: 50});
	                            rowsArray.push({cols: newFilter});
							if(j % 2 == 0){
	                            leftFilterGroup.push({rows: rowsArray});
	                        }else {
	                            rightFilterGroup.push({rows: rowsArray});
							}
						}else {
							checkboxFilter.push({view:"checkbox", id:"checkbox", labelRight:"Показывать документы движения", value:0, });
						}
                }
            }
        }
        //Формирование Таб_Группировка
        for(var i = 0; i <= item.fields.length - 1; i++){
            for(var j = 0; j <= item.group.length - 1; j++){
                if(item.fields[i].name == item.group[j]){
                        dblistData.push({id: j+1, value: item.fields[i].caption})
                }
            }
        }
        //Формирование Таб_Сортировка
        for(var i = 0; i <= item.fields.length - 1; i++){
            for(var j = 0; j <= item.sort.length - 1; j++){
                if(item.fields[i].name == item.sort[j]){
                        sortData.push({id: item.fields[j].name, value: item.fields[i].caption})
                }
            }
        }
    })

    var result = {
                id: "toolbar_reports",
                css: "tab_view",
                rows: [
                     {type: "header", template: "Отчет", view: "template"},
                     {
                         rows: [
                             {   type: "space",
                                 cols: [
                                     {view: "datepicker", label: "Дата", stringResult:true, labelAlign:"right", format: "%d %M %Y ", labelPosition:"left", labelWidth: 50, inputWidth: 250},
                                     {},{},
                                     {view: "button", css: "icon_btn", label: "Сформировать", click: formatReport}
                             ]},
                                tabMenu,
                                {
                                    animate: true,
                                    height:600,
                                    cells: [
                                        tabbarView_four,
                                        tabbarView_first,
                                        tabbarView_second,
                                        tabbarView_three,
                                    ],
                                },
                        ]
                    },
                        {}
                 ]
    };
    return result;

}
//renderToJson(Test_json);

webix.ready(function(){
    webix.ui(renderToJson(Test_json));
});
