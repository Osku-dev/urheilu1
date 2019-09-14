public class Urheilija extends Henkilo {
	
	

	protected String m_linkki;
	protected int m_paino;
	protected String m_laji;
	protected String m_saavutukset;

    public Urheilija(){

        super();
 
    }
	// getterit ja setterit

	public String getLinkki() {
		return m_linkki;
	}
	public int getPaino() {
		return m_paino;
	}
	public String getLaji() {
		return m_laji;
	}
	public String getSaavutukset() {
		return m_saavutukset;
	}
	

	public void setLinkki (String li) {
		m_linkki = li;
	}
	public void setPaino (int pa) {
		m_paino = pa;
	}
	public void setLaji (String la) {
		m_laji = la;
	}
	public void setSaavutukset (String sa) {
		m_saavutukset = sa;
    } 
    public String KerroNimi() {
        return m_etunimi;
     }


    public static void main(String [ ] args) {

        // esimerkki
        Urheilija esimerkkiUrheilija = new Urheilija();
        esimerkkiUrheilija.setEtunimi("joku");
        System.out.println(esimerkkiUrheilija.KerroNimi());
        esimerkkiUrheilija.setLaji("keihäänheitto");
      
  } }