/*
 * Backpack - Skyscanner's Design System
 *
 * Copyright 2016 Skyscanner Ltd
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { useState, useEffect } from 'react';
import type { ReactElement, ReactNode } from 'react';
// @ts-expect-error Untyped import. See `decisions/imports-ts-suppressions.md`.
import { breakpoints } from '@skyscanner/bpk-foundations-web/tokens/base.es6';

import useMediaQuery from './useMediaQuery';

const BREAKPOINTS = {
  SMALL_MOBILE: breakpoints.breakpointQuerySmallMobile,
  MOBILE: breakpoints.breakpointQueryMobile,
  SMALL_TABLET: breakpoints.breakpointQuerySmallTablet,
  SMALL_TABLET_ONLY: breakpoints.breakpointQuerySmallTabletOnly,
  TABLET: breakpoints.breakpointQueryTablet,
  TABLET_ONLY: breakpoints.breakpointQueryTabletOnly,
  ABOVE_MOBILE: breakpoints.breakpointQueryAboveMobile,
  ABOVE_TABLET: breakpoints.breakpointQueryAboveTablet,
  ABOVE_DESKTOP: breakpoints.breakpointQueryAboveDesktop,
  DESKTOP_ONLY: breakpoints.breakpointQueryDesktopOnly,
} as const;

type Props = {
  /**
   * The content to render when the breakpoint matches.
   */
  children: ReactNode | ((matches: boolean) => ReactNode | null);
  query: string | (typeof BREAKPOINTS)[keyof typeof BREAKPOINTS];
  legacy?: boolean;
  matchSSR?: boolean;
};

const BpkBreakpoint = ({
  children,
  legacy = false,
  matchSSR = false,
  query,
}: Props) => {
  const [isClient, setIsClient] = useState(false);
  const matches = useMediaQuery(query);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (isClient) {
    if (!legacy && !Object.values(BREAKPOINTS).includes(query)) {
      console.warn(
        `Invalid query ${query}. Use one of the supported queries or pass the legacy prop.`,
      );
    }

    if (typeof children === 'function') {
      return children(matches) as ReactElement;
    }
    return matches ? (children as ReactElement) : null;
  }

  // Below code is executed when running in SSR mode

  if (typeof children === 'function') {
    return children(matchSSR);
  }
  return matchSSR ? children : null;
};

export { BREAKPOINTS };
export default BpkBreakpoint;
