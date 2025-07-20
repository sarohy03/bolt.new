import { json, type MetaFunction } from '@remix-run/cloudflare';
import { Landing } from '~/components/landing/Landing';

export const meta: MetaFunction = () => {
  return [{ title: 'Bolt' }, { name: 'description', content: 'Talk with Bolt, an AI assistant from StackBlitz' }];
};

export const loader = () => json({});

export default function Index() {
  return <Landing />;
}
