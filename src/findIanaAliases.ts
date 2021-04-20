import { IANA_ALIAS_MAP } from './data';
import type { IanaName } from './data';

export function findIanaAliases(ianaTimeZone: string): IanaName[];
export function findIanaAliases(ianaTimeZone: IanaName): IanaName[];
export function findIanaAliases(ianaTimeZone: IanaName | string): IanaName[] {
  const result = new Set<IanaName>();

  IANA_ALIAS_MAP.filter(({ alias }) => ((alias as unknown) as string[]).includes(ianaTimeZone))
    .map((it) => it.alias)
    .flat()
    .forEach((it) => {
      result.add(it as IanaName);
    });

  return Array.from(result);
}
