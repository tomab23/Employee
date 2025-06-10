import React from 'react'
import { useTranslation } from 'react-i18next'

const Accordions = () => {
  const { t } = useTranslation();

  return (
    <div className="join join-vertical bg-base-100">
    <div className="collapse collapse-arrow join-item border-base-300 border">
      <input type="radio" name="my-accordion-4" defaultChecked />
      <div className="collapse-title font-semibold">{t('ACCORDION.SITE.QUESTION')}</div>
      <div className="collapse-content text-sm">{t('ACCORDION.SITE.ANSWER')}</div>
    </div>
    <div className="collapse collapse-arrow join-item border-base-300 border">
      <input type="radio" name="my-accordion-4"  />
      <div className="collapse-title font-semibold">{t('ACCORDION.TECH.QUESTION')}</div>
      <div className="collapse-content text-sm">{t('ACCORDION.TECH.ANSWER')}</div>
    </div>
    <div className="collapse collapse-arrow join-item border-base-300 border">
      <input type="radio" name="my-accordion-4"  />
      <div className="collapse-title font-semibold">{t('ACCORDION.USE.QUESTION')}</div>
      <div className="collapse-content text-sm">{t('ACCORDION.USE.ANSWER')}</div>
    </div>
    <div className="collapse collapse-arrow join-item border-base-300 border">
      <input type="radio" name="my-accordion-4"  />
      <div className="collapse-title font-semibold">{t('ACCORDION.THEME.QUESTION')}</div>
      <div className="collapse-content text-sm">{t('ACCORDION.THEME.ANSWER')}</div>
    </div>
    <div className="collapse collapse-arrow join-item border-base-300 border">
      <input type="radio" name="my-accordion-4"  />
      <div className="collapse-title font-semibold">{t('ACCORDION.LANGUAGE.QUESTION')}</div>
      <div className="collapse-content text-sm">{t('ACCORDION.LANGUAGE.ANSWER')}</div>
    </div>
  </div>
  )
}

export default Accordions