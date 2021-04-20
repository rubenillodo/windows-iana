import { IANA_ALIAS_MAP } from './ianaAliasMap';
import { WINDOWS_TO_IANA_MAP } from './windowsToIanaMap';

export type Territory = typeof WINDOWS_TO_IANA_MAP[number]['territory'];
export type WindowsZoneName = typeof WINDOWS_TO_IANA_MAP[number]['windowsName'];
export type IanaName =
  | typeof IANA_ALIAS_MAP[number]['name']
  | typeof IANA_ALIAS_MAP[number]['alias'][number]
  | typeof WINDOWS_TO_IANA_MAP[number]['iana'][number];

export { WINDOWS_TO_IANA_MAP, IANA_ALIAS_MAP };
