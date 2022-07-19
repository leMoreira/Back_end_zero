const cdfs = new Set(['Gabriel', 'Vanessa', 'Felipe']);

if(!cdfs.has('Bielzinho')) cdfs.add('Bielzinho');

console.table(cdfs);

console.log(cdfs.size);