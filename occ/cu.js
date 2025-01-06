const groupedAggregates = { name: 'John', age: 25 };
const groupBys = 'name';

if (!(groupBys in groupedAggregates)) {
  console.log('groupBys is not present in groupedAggregates');
} else {
  console.log('groupBys is present in groupedAggregates');
}
