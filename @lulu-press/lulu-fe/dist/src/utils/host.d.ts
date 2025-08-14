/**
 * Analyzes the given host and returns the appropriate environment host portion.
 *
 * Examples:
 * www.test.lulu.com -> test.lulu.com
 * www.sandbox.lulu.com -> sandbox.lulu.com
 * www.lulu.be -> lulu.be
 * website.lulu.com -> lulu.com
 * www.lulu.com -> lulu.com
 * dashboard.test.lulu.com -> test.lulu.com
 *
 * If no match is found, returns the original host.
 */
export declare function normalizeLuluRootHost(host: string): string;
