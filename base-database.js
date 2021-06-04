const fs = require('fs');
const flatted = require('flatted');

class BaseDatabase {
  constructor(model) {
    this.model = model;
    this.filename = model.constructor.name;
  }

  save(objects, callback = () => {}) {
    return new Promise((resolve, reject) => {
      fs.writeFileSync(`./${this.filename}.json`, flatted.stringify(objects), (err, file) => {
        if (err) return reject(err);
        resolve(file);
      });
    });
  }

  load() {
    const file = fs.readFileSync(`./${this.filename}.json`, 'utf8');
    return flatted.parse(file);

    return objects.map(this.model.create);
  }

  async insert (object) {
    const objects = await this.load();
    return this.save(filename, objects.concat(object));
  }

  remove(index) {
    const objects = this.load();

    objects.splice(index, 1);
    save(objects);
  }
}

module.exports = BaseDatabase;
