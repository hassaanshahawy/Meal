var win = Ti.UI.createWindow({backgroundColor: 'white'});
var listView = Ti.UI.createListView();
var sections = [];

var fruitSection = Ti.UI.createListSection({ headerTitle: 'Fruits'});
var fruitDataSet = [
    {properties: { title: 'Apple'}},
    {properties: { title: 'Banana'}},
];
fruitSection.setItems(fruitDataSet);
sections.push(fruitSection);

var vegSection = Ti.UI.createListSection({ headerTitle: 'Vegetables'});
var vegDataSet = [
    {properties: { title: 'Carrots'}},
    {properties: { title: 'Potatoes'}},
];
vegSection.setItems(vegDataSet);
sections.push(vegSection);

listView.sections = sections;
win.add(listView);
win.open();

var fishSection = Ti.UI.createListSection({ headerTitle: 'Fish'});
var fishDataSet = [
    {properties: { title: 'Cod'}},
    {properties: { title: 'Haddock'}},
];
fishSection.setItems(fishDataSet);
listView.appendSection(fishSection);

win.add(ListView);
win.open();