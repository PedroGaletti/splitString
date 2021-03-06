/* 
You can pass the size of the word you want to cut and merge it again after you have cut it, breaking a line.  

entrepreneurship.  

`$ {entrepre} \ n $ {neurship}`. 

for example. */

export default (string) => {
  const split = string.split(' ').map(item => {
    return item.length > 7 ? item.substring(0, 8) : item;
  });
  return split[0] === string.substring(0, 8) ? `${split[0]}\n${string.substring(8)}` : string;
}
