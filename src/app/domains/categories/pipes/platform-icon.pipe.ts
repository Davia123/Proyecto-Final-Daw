import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'platformIcon',
})
export class PlatformIconPipe implements PipeTransform {
  transform(value: string): any {
    if (value === 'PC') {
      return 'https://img.icons8.com/fluency/48/steam.png';
    } else if (
      value === 'PlayStation 5' ||
      value === 'PlayStation 4' ||
      value === 'PlayStation 3' ||
      value === 'PlayStation 2'
    ) {
      return 'https://img.icons8.com/ios-glyphs/48/play-station.png';
    } else if (
      value === 'Xbox One' ||
      value === 'Xbox Series S/X' ||
      value === 'Xbox 360' ||
      value === 'Xbox'
    ) {
      return 'https://img.icons8.com/fluency/48/xbox.png';
    } else if (value === 'Nintendo Switch') {
      return 'https://img.icons8.com/color/48/nintendo-switch.png';
    } else if (value === 'macOS' || value === 'iOS') {
      return 'https://img.icons8.com/ios-filled/50/mac-os.png';
    } else if (value === 'Android') {
      return 'https://img.icons8.com/color/48/android-os.png';
    } else if (value === 'Linux') {
      return 'https://img.icons8.com/color/48/linux--v1.png';
    } else if (value === 'PS Vita') {
      return 'https://cdn-icons-png.flaticon.com/512/588/588368.png';
    } else if (value === 'Nintendo DS' || value === 'Nintendo 3DS') {
      return 'https://cdn-icons-png.flaticon.com/512/588/588248.png';
    } else if (value === 'Web') {
      return 'https://upload.wikimedia.org/wikipedia/commons/8/87/Google_Chrome_icon_%282011%29.png';
    } else if (value === 'Wii U' || value === 'Wii') {
      return 'https://img.icons8.com/ios/48/wii.png';
    }
  }
}
