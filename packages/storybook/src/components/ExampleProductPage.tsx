import { OmgButton } from '@opengemeenten/web-components-react';
import {
  Accordion,
  AccordionSection,
  OrderedList,
  OrderedListItem,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
  UnorderedList,
  UnorderedListItem,
} from '@utrecht/component-library-react/dist/css-module';
import {
  UtrechtArticle,
  UtrechtButtonGroup,
  UtrechtButtonLink,
  UtrechtDocument,
  UtrechtHeading1,
  UtrechtHeading2,
  UtrechtHeading3,
  UtrechtParagraph,
  UtrechtSpotlightSection,
} from '@utrecht/web-component-library-react';
import './rich-text.scss';

export const ExampleProductPage = () => (
  <UtrechtDocument>
    <UtrechtArticle className="og-rich-text">
      <UtrechtHeading1>Paspoort aanvragen</UtrechtHeading1>
      <UtrechtParagraph lead>
        Wilt u een paspoort aanvragen? Maak een afspraak om langs te komen in ons dorpshuis. U betaalt de kosten bij de
        aanvraag. Na 5 werkdagen kunt u het paspoort of de identiteitskaart zelf ophalen in het gemeentehuis.
      </UtrechtParagraph>
      <UtrechtButtonGroup>
        <UtrechtButtonLink appearance="primary-action-button" href="#">
          Maak een afspraak
        </UtrechtButtonLink>
      </UtrechtButtonGroup>
      <UtrechtButtonGroup>
        <OmgButton>Maak een afspraak</OmgButton>
      </UtrechtButtonGroup>
      <UtrechtHeading2>Meenemen</UtrechtHeading2>
      <OrderedList>
        <OrderedListItem>
          Alle paspoorten en ID-kaarten die u nu hebt. Ook als ze zijn verlopen en nog niet door de gemeente ongeldig
          zijn gemaakt.
        </OrderedListItem>
        <OrderedListItem>
          Eén recente pasfoto (niet ouder dan 6 maanden). Let op de eisen (Rijksoverheid).
        </OrderedListItem>
        <OrderedListItem>
          Laat de foto bij voorkeur maken door een fotograaf. In de hal van het gemeentehuis staat een pasfoto-automaat
          voor noodgevallen. Volg precies de instructies voor een geschikte pasfoto (eigen risico).
        </OrderedListItem>
        <OrderedListItem>Pinpas: Betaal bij voorkeur met uw pinpas. Contant betalen is ook mogelijk.</OrderedListItem>
        <OrderedListItem>
          Bij een paspoort voor een kind moet hij of zij ook aanwezig zijn bij aanvraag en afhalen.
        </OrderedListItem>
      </OrderedList>
      <UtrechtHeading3>Jonger dan 18 jaar?</UtrechtHeading3>
      <UtrechtParagraph>Neem dan ook mee:</UtrechtParagraph>
      <OrderedList>
        <OrderedListItem>
          Toestemmingsverklaring reisdocumenten (pdf, 318 KB) van beide ouders (of van degene die het gezag over het
          kind heeft)
        </OrderedListItem>
      </OrderedList>
      <Table>
        <TableCaption>Kosten</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Label</TableHeaderCell>
            <TableHeaderCell>Prijs</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>voor personen tot en met 17 jaar (5 jaar geldig)</TableCell>
            <TableCell>€ 67,30</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>voor personen van 18 jaar en ouder (10 jaar geldig)</TableCell>
            <TableCell>€ 67,30</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Spoedaanvraag</TableCell>
            <TableCell>€ 61,62 toeslag</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>bezorgen van uw paspoort</TableCell>
            <TableCell>€ 6,00 per adres</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <UtrechtSpotlightSection appearance="info">
        <UtrechtHeading3>Heading</UtrechtHeading3>
        <UtrechtParagraph>Lorem ipsum dolor sit amet, consectetur ad * isicing elit, sed do eiusmod *</UtrechtParagraph>
      </UtrechtSpotlightSection>
      <UtrechtHeading2>Ophalen paspoort of ID-kaart</UtrechtHeading2>
      <UtrechtParagraph>
        U moet altijd zelf uw paspoort of identiteitskaart komen ophalen aan de balie. Heeft u een een paspoort of
        ID-kaart voor een kind aangevraagd? Dan moet uw kind meekomen. Voor het ophalen kunt u iedere werkdag tussen
        8.30 en 17.00 uur en op donderdag tot 20.00 uur binnenlopen.
      </UtrechtParagraph>
      <UtrechtParagraph>Vergeet niet de volgende documenten mee te nemen:</UtrechtParagraph>
      <UnorderedList>
        <UnorderedListItem>uw afhaalbewijs</UnorderedListItem>
        <UnorderedListItem>uw oude paspoort of ID-kaart</UnorderedListItem>
      </UnorderedList>
      <UtrechtParagraph>
        Vraagt u een paspoort of ID-kaart aan omdat uw oude kwijt of gestolen is? Dan duurt de afspraak langer omdat we
        de vermissing registreren.
      </UtrechtParagraph>
      <Accordion>
        <AccordionSection body={null} label="Paspoort kwijt of gestolen" expanded={false}></AccordionSection>
        <AccordionSection body={null} label="Spoedaanvraag paspoort" expanded={true}>
          <UtrechtParagraph>
            Als u voor 13.00 uur een spoedaanvraag doet, kunt u het paspoort meestal de volgende werkdag na 11.00 uur
            afhalen. Over uitzonderingen informeren we u aan de balie. Voor een spoedaanvraag betaalt u meer dan voor
            een gewone aanvraag.
          </UtrechtParagraph>
        </AccordionSection>
      </Accordion>
      <UtrechtHeading2>Verschil paspoort en identiteitskaart</UtrechtHeading2>
      <OrderedList>
        <OrderedListItem>
          Alle paspoorten en ID-kaarten die u nu hebt. Ook als ze zijn verlopen en nog niet door de gemeente ongeldig
          zijn gemaakt.
        </OrderedListItem>
        <OrderedListItem>
          Eén recente pasfoto (niet ouder dan 6 maanden). Let op de eisen (Rijksoverheid).
        </OrderedListItem>
        <OrderedListItem>
          Laat de foto bij voorkeur maken door een fotograaf. In de hal van het gemeentehuis staat een pasfoto-automaat
          voor noodgevallen. Volg precies de instructies voor een geschikte pasfoto (eigen risico).
        </OrderedListItem>
        <OrderedListItem>Pinpas: Betaal bij voorkeur met uw pinpas. Contant betalen is ook mogelijk.</OrderedListItem>
        <OrderedListItem>
          Bij een paspoort voor een kind moet hij of zij ook aanwezig zijn bij aanvraag en afhalen.
        </OrderedListItem>
      </OrderedList>
    </UtrechtArticle>
  </UtrechtDocument>
);
