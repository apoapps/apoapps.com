import {useTranslations} from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'privacy' });
  
  return {
    title: t('title'),
    description: t('introduction'),
  };
}

export default function PrivacyPolicy() {
  const t = useTranslations('privacy');
  const email = "contact@apoapps.com";
  
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div>
        <h1 className="text-3xl font-bold mb-8">{t('title')}</h1>
        
        <section className="mb-8">
          <p className="mb-4">{t('introduction')}</p>
          <p className="mb-4">{t('audience')}</p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{t('data_collection.title')}</h2>
          <p>{t('data_collection.description')}</p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{t('data_usage.title')}</h2>
          <p>{t('data_usage.description')}</p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{t('contact_info.title')}</h2>
          <p>{t('contact_info.description')}</p>
          <p className="mt-2">
            <a href={`mailto:${email}`} className="text-blue-600 dark:text-blue-400 hover:underline">
              {email}
            </a>
          </p>
        </section>
        
        <p className="text-sm text-gray-500 mt-12">{t('last_updated')}</p>
      </div>
    </div>
  );
}
