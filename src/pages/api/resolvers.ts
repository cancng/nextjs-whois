import instance from './helper';

interface WhoisArgs {
  domain: string;
}

export default {
  Query: {
    async whois(_: any, args: WhoisArgs) {
      try {
        const res = await (
          await instance.get(
            `https://api.promptapi.com/whois/query?domain=${args.domain}`
          )
        ).data;
        return {
          ...res.result,
          status: JSON.stringify(res.result.status),
        };
      } catch (error) {
        throw new Error('An Error Occured. It is probably unsupported TLD.');
      }
    },
  },
};
