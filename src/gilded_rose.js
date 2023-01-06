class Item {
  constructor(name, sell_in, quality) {
    this.name = name;
    this.sell_in = sell_in;
    this.quality = quality;
  }
}

class CheezeItem extends Item {
  update_quality() {
    this.sell_in--
    if ( this.quality < 50) {
      this.quality++;
    }
  }
}

class LegendaryItem extends Item {
  update_quality() {
  }
}

class BackstagePassItem extends Item {
  update_quality() {
    if (this.sell_in <= 10 && this.sell_in > 5) {
      this.quality += 2;
    } else if ( this.sell_in <=5 && this.sell_in > 0) {
      this.quality +=3;
    } else if (this.sell_in < 0) {
      this.quality = 0;
    } else {
      this.quality++;
    }
    this.sell_in--;
  }
}

class BasicItem extends Item {
  update_quality() {
    if (this.quality > 0) {
      if (this.sell_in < 0) {
        this.quality -= 2;
      } else {
        this.quality--;
      }
    }
    this.sell_in--;
  }
}

class ConjuredItem extends Item {
  update_quality() {
    if (this.quality >= 2) {
      this.quality -= 2;
    }
    this.sell_in--;
  }
}




var items = []



items.push(new BasicItem('+5 Dexterity Vest', 10, 20));
items.push(new CheezeItem('Aged Brie', 2, 0));
items.push(new BasicItem('Elixir of the Mongoose', 5, 7));
items.push(new LegendaryItem('Sulfuras, Hand of Ragnaros', 0, 80));
items.push(new BackstagePassItem('Backstage passes to a TAFKAL80ETC concert', 15, 20));
items.push(new ConjuredItem('Conjured Mana Cake', 3, 6));

function update_quality() {
for (let item of items) {
  item.update_quality();
}



//  for (var i = 0; i < items.length; i++) {
//     if (items[i].name != 'Aged Brie' && items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
//       if (items[i].quality > 0) {
//         if (items[i].name != 'Sulfuras, Hand of Ragnaros') {
//           items[i].quality = items[i].quality - 1
//         }
//       }
//     } else {
//       if (items[i].quality < 50) {
//         items[i].quality = items[i].quality + 1
//         if (items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
//           if (items[i].sell_in < 11) {
//             if (items[i].quality < 50) {
//               items[i].quality = items[i].quality + 1
//             }
//           }
//           if (items[i].sell_in < 6) {
//             if (items[i].quality < 50) {
//               items[i].quality = items[i].quality + 1
//             }
//           }
//         }
//       }
//     }
//     if (items[i].name != 'Sulfuras, Hand of Ragnaros') {
//       items[i].sell_in = items[i].sell_in - 1;
//     }
//     if (items[i].sell_in < 0) {
//       if (items[i].name != 'Aged Brie') {
//         if (items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
//           if (items[i].quality > 0) {
//             if (items[i].name != 'Sulfuras, Hand of Ragnaros') {
//               items[i].quality = items[i].quality - 1
//             }
//           }
//         } else {
//           items[i].quality = items[i].quality - items[i].quality
//         }
//       } else {
//         if (items[i].quality < 50) {
//           items[i].quality = items[i].quality + 1
//         }
//       }
//     }
//   }
// }

}
