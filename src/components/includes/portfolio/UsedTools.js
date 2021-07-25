import React, { useContext } from 'react'
import { useLang } from '../../../hooks/useLang';
import { PortfolioContext } from '../../../hooks/PortfolioContext';

import { UsedToolsItem } from './UsedToolsItem';

export const UsedTools = () => {
    const [ t ] = useLang();
    const { currentPortfolio:{ used_tools } } = useContext(PortfolioContext);
    const { func, db, design } = used_tools;
    const colSize = 12 / Object.keys(used_tools).length;

    return (
        <div className="col-md-12 mt-lg-3">
            {/* TODO: Cambiar titulos de UsedTools */}
            <h3>{ t('portfolio.development-tools') }</h3>
            <div className="row">
                {
                    func && 
                    <ul className={ `col-xs-12 col-sm-${ colSize } portfolio-used-tools` }>
                        <li><strong>{ t('portfolio.functionality') }</strong></li>
                        {
                            func.map( item => <UsedToolsItem key={item.id} { ...item } />)
                        }
                    </ul>
                }
                {
                    db && 
                    <ul className={ `col-xs-12 col-sm-${ colSize } portfolio-used-tools` }>
                        <li><strong>{ t('portfolio.database') }</strong></li>
                        {
                            db.map( item => <UsedToolsItem key={item.id} { ...item } />)
                        }
                    </ul>
                }
                {
                    design && 
                    <ul className={ `col-xs-12 col-sm-${ colSize } portfolio-used-tools` }>
                        <li><strong>{ t('portfolio.design') }</strong></li>
                        {
                            design.map( item => <UsedToolsItem key={item.id} { ...item } />)
                        }
                    </ul>
                }
            </div>{ /* .row */ }
        </div> // /.col-md-12 .mt-lg-3
    );
}